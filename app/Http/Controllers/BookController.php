<?php

namespace App\Http\Controllers;

use App\Book;
use App\Http\Resources\Book as BookResource;
use App\Http\Resources\BookCollection;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     * Used for GET request route /books/
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new BookCollection(Book::all());
    }

    /**
     * Display the specified resource.
     * Used for GET request route /books/{id}
     *
     * @param  \App\Book  $book\{$id}
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // BookResource is an alias set above for the Book Resource in App\Http\Resources\Book.
        return new BookResource(Book::findOrFail($id));

    }

    /**
     * Store a newly created resource in storage.
     * Used for POST request route /books/
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // MUST place ALL fields in validate or they will be excluded when using $request->all().
        $request->validate([
            'isbn'          => '', 
            'title'         => '', 
            'coverPath'       => '',
            'author'       => '', 
            'publisher'    => '', 
            'publishDate'   => '', 
        ]);

        $book = Book::create($request->all());

        return (new BookResource($book))
                ->response()
                ->setStatusCode(201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book\{$id}
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json(null, 204);    
    }

    /**
     * Removes all resources from storage.
     * 
     * @return \Illuminate\Http\Response
     */
    public function reset()
    {
        $collection = new BookCollection(Book::all());
        $collection->each(function($item, $key) {
            $item->delete();
        });

        return response()->json(null, 204);
    }

}
