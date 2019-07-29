<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('mainView');
// });
Route::get('/dashboard', 'AppController@dashboard');
// Route::get('/post/{id}', 'BlogPostController@show');

Route::get('{any?}', 'AppController@main')->where('any', '.*');
