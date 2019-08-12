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
     * @return Array of BlogPosts
     */
    public function index()
    {
        $posts = BlogPost::latest()->get();
        foreach($posts as $post) {
          // return updated_as in terms of minutes / hours / days ago.
          $post->published = $post->updated_at->diffForHumans();
          // attach the comments that belong to the post
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
        // locate the post
        $post = BlogPost::where('id', $id)->first();

        if(!isset($post)) {
          return response('Not found', 404);
        }
        // return content properly formatted
        $post->published = $post->updated_at->diffForHumans();
        $post->content = html_entity_decode($post->content);
        // get all the sorted comments that belong to the post
        $comments = $post->comments()->latest()->get();

        // attach userinfo to the comments and time formatting
        foreach($comments as $comment) {
          $comment->published  = $comment->updated_at->diffForHumans();
          $user = $comment->userInfo;
        }
        return response([
                  'post' => $post,
                  'comments' => $comments
                  ], 200);
    }


    /**
     * Statistics for views
     * @param  int    $id [unique identifier]
     * @return void
     */
    public function viewed(int $id) {
      $post = BlogPost::where('id', $id)->first();
      if(isset($post)) {
        $post->views += 1;
        $post->update();
      }
      return;
    }
}
