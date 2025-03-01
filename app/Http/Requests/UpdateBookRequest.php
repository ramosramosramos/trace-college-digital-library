<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'author' => ['required', 'string'],
            'category_id' => ['required', 'numeric'],
            'file' => ['nullable'],
            'image' => ['nullable'],
        ];

    }

    public function category()
    {
        return [
            'category_id.required' => 'The category field is required.',
        ];
    }
}
