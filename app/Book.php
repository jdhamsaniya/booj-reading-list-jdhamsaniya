<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     * The attributes that are mass assignable.
     * You can pass array to the create function of the model with the data you want to get assigned.
     */
    protected $fillable = [
        'isbn', 'title', 'author', 'coverPath', 'publisher', 'publishDate'
    ];
}
