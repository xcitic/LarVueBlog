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

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');

Route::get('/posts', 'BlogPostController@index');
Route::get('/post/{id}', 'BlogPostController@show');
Route::post('/stats/post/{id}', 'BlogPostController@viewed');

Route::group(['middleware' => ['auth:api']], function() {
  Route::post('/comment/{id}/create', 'CommentController@store');
  Route::post('/comment/{id}/delete', 'CommentController@deleteComment');
  Route::post('/comment/{id}/update', 'CommentController@updateComment');
  Route::get('/user/comments', 'CommentController@getMyComments');
  Route::get('/user', 'UserController@getUser');
  Route::post('/user/update', 'UserController@updateUser');
  Route::post('/user/update/picture', 'UserController@updatePicture');
  Route::post('/user/update/password', 'UserController@updatePassword');


});

Route::group(['middleware' => ['auth:api', 'AdminCheck']], function() {
    Route::get('/comments/all', 'AdminController@getComments');
    Route::get('/users/all', 'AdminController@getUsers');
    Route::post('/post/create', 'AdminController@storePost');
    Route::post('/post/{id}/delete', 'AdminController@deletePost');
    Route::post('/post/{id}/update', 'AdminController@updatePost');
    Route::post('/user/{id}/delete', 'AdminController@deleteUser');
});
