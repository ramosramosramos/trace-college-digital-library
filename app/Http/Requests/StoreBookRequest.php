<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'author' => ['required', 'string'],
            'category_id' => ['required', 'numeric'],
            'file' => ['required', 'file'],
            'image' => ['nullable', 'file'],
        ];

    }

    public function category()
    {
        return [
            'category_id.required' => 'The category field is required.',
        ];
    }
}
