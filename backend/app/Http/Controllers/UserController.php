<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function __construct(Request $request) {
      $this->user = $request->user('api');
      if(!isset($this->user)) {
        abort();
      }
    }


    public function updatePicture(Request $request) {

      // VALIDATE & SANITIZE
      $user = $request->user('api');
      if(isset($request->image)) {

        try {
          $image = $request->image;
          $imageName = strtolower( str_replace(' ', '', trim($user->name . $this->generateRandomString()) )).'.png';
          $imageLink = public_path('/images/users/');
          \Image::make($image)->encode('png')->save($imageLink.$imageName);
        } catch (\Exception $e) {

          return response($e, 415);
        }

        $user->image = '/images/users/'.$imageName;
        $user->update();
        return response('Updated profile image', 200);



    }
  }


    public function updateUser(Request $request) {


      // Validation of input
      // Validation of base64
      // Sanitization
      $user = $request->user('api');
      // if(isset($request->image)) {
      //
      //   try {
      //     $image = $request->image;
      //     $imageName = strtolower( str_replace(' ', '', trim($user->name . $this->generateRandomString()) )).'.png';
      //     $imageLink = public_path('/images/users/');
      //     return $image;
      //     \Image::make($image)->encode('png')->save($imageLink.$imageName);
      //   } catch (\Exception $e) {
      //
      //     return response($e, 415);
      //
      //   }
      //
      //
      //   $user->image = '/images/users/'.$imageName;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response('Successfully updated user account', 200);

      }


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
