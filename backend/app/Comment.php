<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';
    protected $fillable = [
      'user_id',
      'blog_post_id',
      'text'
    ];

    /**
     * Comment Owner Relationship
     * @return Relationship [belongsTo]
     */
    public function owner() {
      return $this->belongsTo('App\User', 'user_id');
    }

    /**
     * Comment Relationship to Post
     * @return Relationship [belongsTo]
     */
    public function post() {
      return $this->belongsTo('App\BlogPost', 'blog_post_id');
    }

    /**
     * User Info filtered
     * @return Array [name, image, profile_link]
     */
    public function userInfo() {
      return $this->belongsTo('App\User', 'user_id')->select(['name', 'image', 'profile_link']);
    }
}
