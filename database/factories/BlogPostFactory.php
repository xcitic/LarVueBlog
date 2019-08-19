<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\BlogPost;
use Faker\Generator as Faker;

$factory->define(BlogPost::class, function (Faker $faker) {

    $user = DB::table('users')->where('role', 'admin')->first();

    return [
        'user_id' => $user->id,
        'title' => $faker->sentence(3),
        'description' => $faker->sentence(5),
        'content' => $faker->text(650),
        'image' => $faker->imageUrl(1920, 1080),
        'likes' => $faker->numberBetween(20, 1000),
        'views' => $faker->numberBetween(50, 1000),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
