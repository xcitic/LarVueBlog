<?php

namespace App\Http\Controllers;

use App\BlogPost;
use App\User;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = BlogPost::get();
        foreach($posts as $post) {
          // return created_as in terms of minutes / hours / days ago.
          $published = $post->created_at->diffForHumans();
          $post->published = $published;
          // attach the comments that belong to the post;
          $comments = $post->comments;
        }

        return $posts;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BlogPost  $blogPost
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {

        $post = BlogPost::where('id', $id)->first();
        // TODO ORDER BY created at date
        $post->published = $post->updated_at->diffForHumans();
        $post->content = html_entity_decode($post->content);
        $comments = $post->comments()->latest()->get();

        foreach($comments as $comment) {
          $comment->published  = $comment->updated_at->diffForHumans();
          $user = $comment->userInfo;
        }
        return response()
          ->json([
                  'post' => $post,
                  'comments' => $comments
                  ], 200);
    }

    public function viewed(int $id) {
      $post = BlogPost::where('id', $id)->first();
      $post->views += 1;
      $post->update();
      return;
    }
}
