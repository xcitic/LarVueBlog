<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    $name = $faker->name;
    // combine name with a random string(5), replace all spaces with - and make all lowercase.
    $profile_link = strtolower( str_replace(' ', '-', trim(( $name . Str::random(5)) )) );
    return [
        'name' => $name,
        'email' => $faker->unique()->safeEmail,
        'image' => 'https://i.pravatar.cc/150/?img=' . $faker->numberBetween(1,50),
        'profile_link' => $profile_link,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});
