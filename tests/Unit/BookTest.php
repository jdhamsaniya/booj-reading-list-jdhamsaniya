<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Book;

class BookTest extends TestCase
{

    public function testGetAllBooks() {
        $response = $this->get('/api/books');
        
        $response->assertStatus(200);
    }

    public function testGetFirstBook() {
        $book = Book::create([
            'isbn'          => '1234567890',
            'title'         => 'booktitle',
            'coverPath'     => 'jpg',
            'author'        => 'anthos',
            'publisher'     => 'Spectre',
            'publishDate'   => '2019',
        ]);

        $response = $this->get("/api/books/{$book->id}");
        $response->assertStatus(200);
    }

    /**  */
    public function testBookCreation() 
    {
        $response = $this->json('POST', '/api/books', [
            'isbn'          => '1234567890',
            'title'         => 'booktitle',
            'coverPath'     => 'jpg',
            'author'        => 'anthos',
            'publisher'     => 'Spectre',
            'publishDate'   => '2019',
        ]);

        $response->assertStatus(201);
    }

    public function testDeleteAllBooks() {
        $book = Book::create([
            'isbn'          => '1234567890',
            'title'         => 'booktitle',
            'coverPath'     => 'jpg',
            'author'        => 'anthos',
            'publisher'     => 'Spectre',
            'publishDate'   => '2019',
        ]);

        $response = $this->json('DELETE', '/api/books/');
        
        $response->assertStatus(204);
    }

    public function testDeleteBookResource() {
        $book = Book::create([
            'isbn'          => '1234567890',
            'title'         => 'booktitle',
            'coverPath'     => 'jpg',
            'author'        => 'anthos',
            'publisher'     => 'Spectre',
            'publishDate'   => '2019',
        ]);

        $response = $this->json('DELETE', "/api/books/{$book->id}");
        
        $response->assertStatus(204);
    }


}
