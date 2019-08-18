<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserLoginRequest;

class AuthController extends Controller
{

  /**
   * Creates a new User instance and persists it to the database
   * @param  UserStoreRequest $request [validate & sanitize input]
   * @return Array  [token & user object]
   */
  public function register(UserStoreRequest $request)
  {
      // validate and sanitize input
      $validated = $request->validated();

      // Hash password using php recommended password_hash, defaults to bcrypt hash encryption.
      $password = password_hash($request->password, PASSWORD_DEFAULT);
      // create an avatar link
      $imageLink = 'https://i.pravatar.cc/150/?img=' . rand(1, 50);
      // combine name with a random string(5), replace all spaces with - and make all lowercase.
      $profile_link = strtolower( str_replace(' ', '-', trim(( $request->name . Str::random(5)) )) );

      try {
        $user = User::create([
          'name' => $request->name,
          'email' => $request->email,
          'password' => $password,
          'type' => 'user',
          'image' => $imageLink,
          'profile_link' => $profile_link
        ]);
        $user->save();

        // Generate token with passport
        $token = $user->createToken('bearer')->accessToken;
        // generate response, return only public parts of user info; $user->getInfo()
        $userInfo = $user->getInfo();
        $token = ['token' => $token];
        $response = $userInfo + $token;

        return response($response, 200);

      } catch (\Exception $e) {
        return response(['errors' => 'Invalid input'], 422);
      }

      return response(['errors' => 'Invalid input'], 422);

  }

  /**
   * User login
   * @param  UserLoginRequest $request [description]
   * @return Object                    [User object & Token]
   */
  public function login(UserLoginRequest $request)
  {
    // Validated data
    $validated = $request->validated();

    // find the user
    $user = User::where('email', $request->email)->first();

    if ($user) {
      // check the hashed password
      if (password_verify($request->password, $user->password))
      {
        // Generate token with passport
        $token = $user->createToken('bearer')->accessToken;
        // generate response, return only public parts of user info getInfo()
        $userInfo = $user->getInfo();
        $token = ['token' => $token];
        // $response = array_merge($userInfo, $token);
        $response = $userInfo + $token;
        return response($response, 200);
      }
    }

    return response(['errors' => 'Wrong email or password'], 422);

  }


}
