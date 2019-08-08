<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $table = 'blog_posts';
    protected $fillable = [
      'user_id',
      'title',
      'description',
      'content',
      'image',
      'likes',
      'views'
    ];

    public function owner() {
      return $this->belongsTo('App\User', 'user_id');
    }

    public function comments() {
      return $this->hasMany('App\Comment');
    }

}
