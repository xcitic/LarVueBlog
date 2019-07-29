<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('cors')->group(function() {
//   Route::post('/login', 'AuthController@login');
//   Route::post('/register', 'AuthController@register');
// });


Route::group(['middleware' => ['json_response', 'cors']], function() {
  Route::post('/login', 'AuthController@login');
  Route::post('/register', 'AuthController@register');
});

Route::get('/posts', 'BlogPostController@index');
