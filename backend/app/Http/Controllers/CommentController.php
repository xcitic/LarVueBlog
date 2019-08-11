<?php

namespace App\Http\Controllers;

use App\Comment;
use App\BlogPost;
use Illuminate\Http\Request;
use App\Http\Requests\CommentStoreRequest;


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
    public function store(CommentStoreRequest $request)
    {

        $validated = $request->validated();

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


    public function getMyComments(Request $request) {

      $user = $request->user('api');
      $comments = $user->comments;
      foreach ($comments as $comment) {
        $comment->post;
        $comment->published = $comment->created_at->diffForHumans();
      }

      return response($comments, 200);
    }



    public function deleteComment(int $id, Request $request) {
      $user = $request->user('api');
      $comment = Comment::where('id', $id)->first();
      // admin can delete any comment
      if($user->isAdmin() ) {
        $comment->delete();
        return response('Deleted', 200);
      }
      // user can only delete their own comments
      if($comment->owner->id === $user->id) {
          $comment->delete();
          return response('Deleted', 200);
        }

      return response('Unauthorized', 401);
    }



    public function updateComment(CommentStoreRequest $request) {
      $user = $request->user('api');
      $comment = Comment::where('id', $request->id)->first();

      if(isset($comment)) {
        // admin and user who owns the comment are allowed to edit.
        if($user->isAdmin() || $comment->owner->id === $user->id) {

          $validated = $request->validated();

          $comment->text = $request->text;
          $comment->update();
          return response('Updated', 200);
        }

      }
      return response('Unauthorized', 401);
    }

}
