<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Requests\UserUpdatePictureRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Http\Request;

class UserController extends Controller
{


    /**
     * Check user is authenticated
     *
     */
    public function __construct() {
      $this->middleware('auth:api');
    }


    /**
     * Get currently logged in user using passport token
     * @param  Request $request
     * @return Object           [User]
     */
    public function getUser(Request $request) {
      return $request->user('api');
    }


    /**
     * Update user picture and save to public folder
     * @param  UserUpdatePictureRequest $request [Validate base64 image]
     * @return String           [description]
     */
    public function updatePicture(UserUpdatePictureRequest $request) {

      // validate
      $validated = $request->validated();
      // check user again
      $user = $request->user('api');
      // Check if admin is updating another user
      if(isset($request->id)) {
        $id = intval($request->id);
      }
      // User is admin and ID is passed
      if($user->isAdmin() && isset($id)) {
        $user = User::where('id', $id)->first();
      }

      // check that image is a string
      if(is_string($request->image)) {

        try {
          $image = $request->image;
          // set the name of the image to username + 10 character random string + .png extension
          $imageName = strtolower( str_replace(' ', '', trim($user->name . $this->generateRandomString()) )).'.png';
          $imageLink = public_path('/images/users/');
          // Use Image library to create, encode the base64 string and save the image.
          \Image::make($image)->encode('png')->save($imageLink.$imageName);
        } catch (\Exception $e) {

          return response($e, 415);
        }
        // update the user and send response.
        $user->image = '/images/users/'.$imageName;
        $user->update();
        return response('Updated profile image', 200);
    }
  }


    /**
     * Update the users information
     * @param  UserUpdateRequest $request [Validation & Sanitization]
     * @return String                   [Success or error]
     */
    public function updateUser(UserUpdateRequest $request) {

        $validated = $request->validated();

        $user = $request->user('api');
        if(isset($request->id)) {
          $id = intval($request->id);
        }
        // User is admin and ID is passed
        if($user->isAdmin() && isset($id)) {
          $user = User::where('id', $id)->first();
        }

        // User instance exists
        if($user) {
          $user->name = $request->name;
            // Check if email is updated and unique
          if ($request->email !== $user->email) {
            $alreadyExists = User::where('email', $request->email)->first();
              // If a user instance exists with the email, abort request
            if(isset($alreadyExists)) {
              abort(response('Email exists', 422));
            }
            else {
              $user->email = $request->email;
            }
          }
          $user->update();
          return response('Successfully updated user account', 200);
        }

        return response('Unauthorized', 401);
      }

      /**
       * Update users password
       * @param  Request $request
       * @return String           [Success or error]
       */
      public function updatePassword(Request $request) {
        // authenticate
        $user = $request->user('api');
        // validate input
        $validated = $request->validate([
          'old_password' => 'required|string|min:6|max:75',
          'new_password' => 'required|string|min:6|max:75|confirmed'
        ]);

        if(isset($request->id)) {
          $id = intval($request->id);
        }
        // User is admin and ID is passed
        if($user->isAdmin() && isset($id)) {
          $user = User::where('id', $id)->first();
        }

        if($user instanceof User) {
          $old_pw = $request->old_password;
          $new_pw = $request->new_password;

          try {
            // check the current password entered
            if(password_verify($old_pw, $user->password)) {
              // encrypt new password
              $user->password = password_hash($new_pw, PASSWORD_DEFAULT);
              // update DB and send response
              $user->update();
              return response('Updated password', 200);
            }

            return response('Wrong password', 401);

          } catch (\Exception $e) {

            return response($e, 405);

          }
        }

        return reponse('Unauthorized', 402);


      }

    /**
     * Psudo random string generator
     * @param  integer $length [Length of string returned, default 10]
     * @return string          [random string]
     */
    private function generateRandomString($length = 10) {
      $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < $length; $i++) {
          $randomString .= $characters[rand(0, $charactersLength - 1)];
      }
      return $randomString;
    }

}
