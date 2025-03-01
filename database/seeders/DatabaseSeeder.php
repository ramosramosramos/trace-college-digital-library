<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'David Grabriel Mendoza Bleza',
            'email' => 'admin1@gmail.com',
            'email_verified_at' => now(),
            'role' => 'admin',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ]);
        User::factory()->create([
            'name' => 'I am admin 2',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'role' => 'admin',
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ]);
        Category::factory(20)->create();
        Book::factory(100)->create();
        $this->call([
            CategorySeeder::class,
        ]);
    }
}
