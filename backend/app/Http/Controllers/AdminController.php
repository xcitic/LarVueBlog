<?php

namespace App\Http\Controllers;

use App\Comment;
use App\User;
use App\BlogPost;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api');
        $this->middleware('AdminCheck');
    }

    public function getComments() {
      $comments = Comment::get();
      return response($comments);
    }

    public function getUsers() {
      $users = User::get();
      return response($users);
    }

    public function deletePost(int $id) {
      $post = BlogPost::where('id', $id)->first();
      $post->delete();
      return response($id);
    }

    public function updatePost(int $id, Request $request) {
      $post = BlogPost::where('id', $id)->first();

      $validate = $request->validate([
        'title' => 'required|string|max:100',
        'description' => 'required|string|max:150',
        'content' => 'required|max:1000',
      ]);

      if(isset($request->image)) {
        try {
          $image = $request->image;
          $title = $request->title;
          $imageName = trim(strtolower(preg_replace('/\s+/', '', $title))).'.png';

          $imageLink = public_path('/images/');
          \Image::make($image)->encode('png')->save($imageLink.$imageName);
        } catch (\Exception $e) {

          return response($e, 415);
        }
      }

      try {
        $post->title = $request->title;
        $post->description = $request->description;
        $post->content = $request->content;
        if(isset($request->image)) {
          $post->image = '/images/'.$imageName;
        }
        $post->save();

        return response($post);

      } catch (\Exception $e) {

        return response($e, 500);

      }

    }

    public function deleteUser(int $id) {
      $user = User::where('id', $id)->first();

      if(isset($user)) {
        $user->delete();
        return response('Deleted', 200);
      }

      return response('User not found', 403);
    }
}
