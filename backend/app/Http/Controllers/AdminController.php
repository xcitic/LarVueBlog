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
      return response($post);
    }
}
