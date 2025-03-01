<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;

class HomeController extends Controller
{
    public function index()
    {
        $books = Book::with('media')->where('is_featured', true)->limit(3)->get();

        return view('home', ['books' => BookResource::collection($books)->toArray(request())]);

    }
}
