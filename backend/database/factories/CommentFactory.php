<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {

    $user = factory(App\User::class)->create();

    return [
      'user_id' => $user->id,
      'blog_post_id' => $faker->numberBetween(1,20),
      'text' => $faker->text($faker->numberBetween(30,200)),
    ];
});
