<?php

namespace App\Http\Controllers;

use App\Comment;
use App\User;
use App\BlogPost;
use App\Http\Requests\PostStoreRequest;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    /**
     * Check that users is admin
     */
    public function __construct()
    {
        $this->middleware('AdminCheck');
    }


    /**
     * Get all comments
     * @return Array $comments
     */
    public function getComments()
    {
      $comments = Comment::get();
      return response($comments);
    }

    /**
     * Get all users
     * @return Array $users
     */
    public function getUsers()
    {
      $users = User::get();
      return response($users);
    }


    /**
     * Create and store a new BlogPost
     *
     * @param  PostStoreRequest  $request
     * @return Object [BlogPost or Error]
     */
    public function storePost(PostStoreRequest $request)
    {
        // double check auth
        $auth = $request->user('api');
        if($auth->role === 'admin') {

          // validate & sanitize data
          $validated = $request->validated();
            // Generate image from blob64 with Intervention\Image and upload to public directory
            // Remember to install php*-gd package to process the image unless you want to use
            // imagick
            try {
              $image = $request->get('image');
              $title = $request->title;
              $imageName = trim(strtolower(preg_replace('/\s+/', '', $title))).'.png';

              $imageLink = public_path('/images/');
              \Image::make($image)->encode('png')->save($imageLink.$imageName);
            } catch (\Exception $e) {

              return response($e, 415);
            }

            try {

              $post = new BlogPost([
                'user_id' => $auth->id,
                'title' => $request->title,
                'description' => $request->description,
                'content' => $request->content,
                'image' => '/images/'.$imageName,
                'likes'=> 0,
                'views'=> 0,
              ]);

              $post->save();

              return response($post, 201);

            } catch (\Exception $e) {

              return response ($e, 500);

            }

        }
        // Default if user auth fails
        return response('Unauthorized', 401);

    }


    /**
     * Update a post
     * @param  int     $id      [unique identifier]
     * @param  PostUpdateRequest $request [Validation & Sanitization]
     * @return Object          [updated post or error]
     */
    public function updatePost(int $id, PostStoreRequest $request)
    {

      // Check that the post exists
      $post = BlogPost::where('id', $id)->first();
      if(!is_object($post)) {
        abort( response('Not found', 404) );
      }

      // validate input
      $validated = $request->validated();

      // if new image uploaded and valid, then process it
      if(is_string($request->image)) {
        try {
          $image = $request->image;
          $title = $request->title;
          // replace all spaces, set lowercase, trim edges and add .png extension.
          $imageName = trim(strtolower(preg_replace('/\s+/', '', $title))).'.png';

          $imageLink = public_path('/images/');
          // Generate image using Intervention\Image package.
          \Image::make($image)->encode('png')->save($imageLink.$imageName);

          // update the image link
          $post->image = '/images/'.$imageName;

        } catch (\Exception $e) {

          return response($e, 415);
        }
      }

      try {
        $post->title = $request->title;
        $post->description = $request->description;
        $post->content = $request->content;

        $post->update();

        return response($post, 200);

      } catch (\Exception $e) {

        return response($e, 500);

      }

    }


    /**
     * Delete a Post
     * @param  int    $id [unique identifier]
     * @return string   [success or error msg]
     */
    public function deletePost(int $id)
    {
      $post = BlogPost::where('id', $id)->first();

      if(is_object($post)) {
        $post->delete();
        return response('Deleted', 200);
      }

      return response('Not found', 404);
    }


    /**
     * Delete user
     * @param  int    $id [unique identifier]
     * @return string     [Success, or error msg]
     */
    public function deleteUser(int $id)
    {
      $user = User::where('id', $id)->first();

      if(isset($user)) {
        $user->delete();
        return response('Deleted', 200);
      }

      return response('User not found', 403);
    }
}
