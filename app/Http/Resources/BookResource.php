<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author,
            'category_id' => $this->category_id,
            'is_featured' => $this->is_featured,
            'image' => $this->getFirstMediaUrl('images') ? $this->getFirstMediaUrl('images') : '/dump/no_book.jpg',
            'file' => $this->getFirstMediaUrl('files') ? $this->getFirstMediaUrl('files') : '',
        ];
    }
}
