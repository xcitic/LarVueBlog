<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AuthController extends Controller
{

  /**
   * Creates a new User instance and persists it to the database
   * @param  Request $request form input
   * @return Array  token & user object.
   */
  public function register(Request $request)
  {
    // $validator = $request->validate([
    //   'name' => 'required|string|max:255',
    //   'email' => 'required|string|email|max:255|unique:users',
    //   'password' => 'required|string|min:6|max:150|confirmed'
    // ]);

    // Hash password using php recommended password_hash, defaults to bcrypt hash encryption.
    $request['password'] = password_hash($request['password'], PASSWORD_DEFAULT);
    $user = User::create([$request->toArray()]);
    $user->save();


    $token = $user->createToken('bearer')->accessToken;
    $response = ['token' => $token, 'user' => $user];

    return response()->json($response, 200);

  }

  public function login(Request $request)
  {
    $validator = $request->validate([
      'email' => 'required|string|email|max:150',
      'password' => 'required|string|min:6|max:150'
    ]);


    $user = User::where('email', $request->email)->first();

    if ($user) {
      if (password_verify($request->password, $user->password))
      {
        $token = $user->createToken('bearer')->accessToken;
        $response = ['token' => $token, 'user' => $user];
        return response()->json($response, 200);
      }
    }

    return response(['errors' => 'Wrong email or password'], 422);

  }


}
