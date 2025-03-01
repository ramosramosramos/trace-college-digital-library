<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void {
        Book::create([
            'title' => fake()->realText(40),
            'category_id' => 2,
            'author' => fake()->name(),
            'is_featured'=>true,
        ]);
        Book::create([
            'title' => fake()->realText(40),
            'category_id' => 1,
            'author' => fake()->name(),
            'is_featured'=>true,
        ]);
        Book::create([
            'title' => fake()->realText(40),
            'category_id' =>3,
            'author' => fake()->name(),
            'is_featured'=>true,
        ]);

    }
}
