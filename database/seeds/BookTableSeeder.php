<?php

use App\Book;
use Illuminate\Database\Seeder;

/**
 * For seeders such as this one, 
 * it needs to be called in the main DatabaseSeeder.php in order to
 * run properly.
 */
class BookTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::create([
            'isbn'          => '1234567890',
            'title'         => 'The Bookening',
            'coverPath'     => 'jpg',
            'author'        => 'anthos',
            'publisher'     => 'Penguin',
            'publishDate'   => '2019',
        ]);

        Book::create([
            'isbn'          => '9781476738024',
            'title'         => 'A Man Called Ove',
            'coverPath'     => 'https://covers.openlibrary.org/b/id/8314262-M.jpg',
            'author'        => 'Fredrik Backman',
            'publisher'     => 'Washington Square Press',
            'publishDate'   => 'May 05, 2015',
        ]);

        Book::create([
            'isbn'          => '9780060935467',
            'title'         => 'To Kill a Mockingbird',
            'coverPath'     => 'https://covers.openlibrary.org/b/id/8758697-M.jpg',
            'author'        => 'Harper Lee',
            'publisher'     => 'Perennial Classics',
            'publishDate'   => '2002',
        ]);
    }
}
