<?php

namespace App\Http\Controllers;

use App\Comment;
use App\BlogPost;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = $request->validate([
          'message' => 'required|string|max:255',
          'postId' => 'required|integer'
        ]);

        $postExists = BlogPost::where('id', $request->postId)->first();
        $user = $request->user();

        if($postExists && $user) {
          $comment = Comment::create([
            'text' => $request->message,
            'user_id' => $user->id,
            'blog_post_id' => $postExists->id,
          ]);
          $comment->save();
          
          $comment->published  = $comment->created_at->diffForHumans();
          $userInfo = $comment->userInfo;

          return response()->json($comment, 201);
        }

        return response()->json('Error', 404);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
