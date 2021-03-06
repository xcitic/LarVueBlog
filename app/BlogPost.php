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


    /**
     * BlogPost Owner Relationship
     * @return Relationship [BelongsTo]
     */
    public function owner() {
      return $this->belongsTo('App\User', 'user_id');
    }

    /**
     * Comments Relationship
     * @return Relationship [hasMany]
     */
    public function comments() {
      return $this->hasMany('App\Comment');
    }

}
