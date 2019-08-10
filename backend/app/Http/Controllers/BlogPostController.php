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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // TODO Move to dedicated Admin Controller
        // Use API guard to authenticate the user request.
        $auth = $request->user('api');

        if ($auth->role === 'admin') {
          $validate = $request->validate([
            'title' => 'required|string|max:100',
            'description' => 'required|string|max:150',
            'content' => 'required|max:1000',
            'image' => 'required',
          ]);

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
