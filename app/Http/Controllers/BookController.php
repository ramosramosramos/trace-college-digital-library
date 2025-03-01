<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::with('media')->select(['id', 'title', 'author'])->orderBy('is_featured','desc')->latest()->paginate(21);

        return inertia('book/index', ['books' => BookResource::collection($books)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('book/create', ['categories' => $this->categories()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $book = Book::create($request->validated());
        if ($request->hasFile('file')) {
            $book->addMedia($request->file)->toMediaCollection('files');
        }
        if ($request->hasFile('image')) {
            $book->addMedia($request->image)->toMediaCollection('images');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {

        return inertia('book/edit', ['categories' => $this->categories(), 'book' => new BookResource($book->load('media'))]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        $book->update($request->validated());
        if ($request->hasFile('file')) {
            $book->getMedia('files')->each(function ($file) {
                $file->delete();
            });
            $book->addMedia($request->file)->toMediaCollection('files');
        }
        if ($request->hasFile('image')) {
            $book->getMedia('images')->each(function ($image) {
                $image->delete();
            });
            $book->addMedia($request->image)->toMediaCollection('images');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();
    }

    public function restore($id)
    {
        $book = Book::withTrashed()->findOrFail($id);
        $book->restore();
    }

    public function forceDelete($id)
    {
        $book = Book::withTrashed()->findOrFail($id);
        $book->forceDelete();
    }

    public function categories()
    {
        return Cache::remember('categories', now()->addHours(23), function () {
            return Category::select(['id', 'name'])->get();
        });
    }
}
