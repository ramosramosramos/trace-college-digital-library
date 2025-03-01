<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

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
            'title' => $this->title,
            'author' => $this->author,
            // 'category'=>$this->category->name,
            'image' => $this->getFirstMediaUrl('images') ? $this->getFirstMediaUrl('images') : Storage::url('no_book.jpg'),
            'file' => $this->getFirstMediaUrl('files') ? $this->getFirstMediaUrl('files') :'#',
        ];
    }
}
