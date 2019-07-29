<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';
    protected $fillable = [
      'user_id',
      'blog_post_id'
    ];

    public function owner() {
      return $this->belongsTo('App\User', 'user_id');
    }

    public function post() {
      return $this->belongsTo('App\BlogPost', 'user_id');
    }
}
