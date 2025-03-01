<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::middleware(['auth', 'verified'])->group(function () {

    Route::resource('/books', BookController::class)->except(['update', 'destroy']);
    Route::post('/books/{book}/update', [BookController::class, 'update'])->name('books.update');
    Route::post('/books/{book}/destroy', [BookController::class, 'destroy'])->name('books.destroy');

    Route::resource('/categories', CategoryController::class)->except(['update', 'destroy']);
    Route::post('/categories/{category}/update', [CategoryController::class, 'update'])->name('categories.update');
    Route::post('/categories/{category}/destroy', [CategoryController::class, 'destroy'])->name('categories.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
