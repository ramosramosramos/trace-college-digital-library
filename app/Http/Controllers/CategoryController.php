<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::with('media')->select(['id', 'name'])->latest()->paginate(21);

        return inertia('category/index', ['categories' => CategoryResource::collection($categories)]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('category/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create($request->validated());
        if ($request->hasFile('image')) {
            $category->addMedia($request->image)->toMediaCollection('categories');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return inertia('category/edit',['category'=>new CategoryResource($category->load('media'))]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update($request->validated());
        if ($request->hasFile('image')) {
            $category->getMedia('categories')->each(function ($image) {
                $image->delete();
            });
            $category->addMedia($request->image)->toMediaCollection('categories');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }

    public function restore($id)
    {
        $category = Category::withTrashed()->findOrFail($id);
        $category->restore();
    }

    public function forceDelete($id)
    {
        $category = Category::withTrashed()->findOrFail($id);
        $category->forceDelete();
    }
}
