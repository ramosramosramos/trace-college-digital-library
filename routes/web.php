<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::resource('/books', BookController::class)->except(['update', 'destroy']);
    Route::post('/books/{book}/update', [BookController::class, 'update'])->name('books.update');
    Route::post('/books/{book}/destroy', [BookController::class, 'destroy'])->name('books.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
