<?php

namespace App\Http\Controllers;

use App\Comment;
use App\BlogPost;
use Illuminate\Http\Request;
use App\Http\Requests\CommentStoreRequest;
use App\Http\Requests\CommentUpdateRequest;


class CommentController extends Controller
{

    /**
     * Check that user is authenticated before continuing
     */
    public function __construct() {
      $this->middleware('auth:api');
    }

    /**
     * Handle and store a new comment in DB.
     *
     * @param CommentStoreRequest  $request [validation & sanitization]
     * @return Object [$comment or $error]
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

          return response($comment, 201);
        }

        return response('Error', 404);

    }


    /**
     * Get Users own comments
     * @param  Request $request
     * @return Array            [$comments]
     */
    public function getMyComments(Request $request) {

      $user = $request->user('api');
      if($user) {
        $comments = $user->comments;
        foreach ($comments as $comment) {
          $comment->post;
          $comment->published = $comment->created_at->diffForHumans();
        }

        return response($comments, 200);
      }

      return response('Unathorized', 401);

    }


    /**
     * Delete a comment
     * @param  int     $id      [unique identifier]
     * @param  Request $request
     * @return String           [Success or error]
     */
    public function deleteComment(int $id, Request $request) {

      $user = $request->user('api');
      $comment = Comment::where('id', $id)->first();

      // check that the comment exists and db has returned an object
      if(is_object($comment)) {
        // admin can delete any comment, user can delete their own comments
        if($user->isAdmin() || $comment->owner->id === $user->id) {
          $comment->delete();
          return response('Deleted', 200);
        }
      }

      return response('Unauthorized', 401);
    }


    /**
     * Update a comment
     * @param  CommentStoreRequest $request [Validation & sanitization]
     * @return String                      [Success or error]
     */
    public function updateComment(int $id, CommentUpdateRequest $request) {
      // check user
      $user = $request->user('api');
      // validate input
      $validated = $request->validated();

      // find the comment
      $comment = Comment::where('id', $request->id)->first();

      // check comment found
      if(is_object($comment)) {
        // admin or user who owns the comment are allowed to edit.
        if($user->isAdmin() || $comment->owner->id == $user->id) {
          $comment->text = $request->text;
          $comment->update();
          return response('Updated', 200);
        }

      }
      return response('Unauthorized', 401);
    }

}
