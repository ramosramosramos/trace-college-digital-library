<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Book extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory, InteractsWithMedia, SoftDeletes;

    protected $table = 'books';
    protected $fillable = [
        'category_id',
        'title',
        'author',
        'is_featured',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
