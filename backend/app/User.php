<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'image', 'profile_link'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



    /**
     * Comments Relationship to User
     * @return Relationship [hasMany]
     */
    public function comments() {
      return $this->hasMany('App\Comment');
    }

    /**
     * Check if user is admin
     * @return boolean [description]
     */
    public function isAdmin() {
      if ($this->role === 'admin') {
        return true;
      }
      return false;
    }


    /**
     * Only return specified DB info to user
     * @return Array
     */
    public function getInfo() {
      $info = [
        'name' => $this->name,
        'email' => $this->email,
        'image' => $this->image,
        'profile' => $this->profile_link,
      ];
      return $info;
    }
}
