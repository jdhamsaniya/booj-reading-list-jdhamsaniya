App can be accessed below:

https://booj-reading-list-jdhamsaniya.herokuapp.com/

*Beware of the person of one book. -- Thomas Aquinas*
## Prompt/Tasks
Compose a site using the [Laravel](https://laravel.com/) or Vue framework that allows the user to create a list of books they would like to read. Users should be able to perform the following actions:
* Connect to a publically available API
* Create Postman collection and Vue app OR Laravel App 
* Add or remove items from the list
* Change the order of the items in the list
* Sort the list of items
* Display a detail page with at least 3 points of data to display
* Include unit tests
* Deploy it on the cloud - be prepared to describe your process on deployment

## About the Project
#### Client - Vue
This application currently connects to the Open Library API (https://openlibrary.org/dev/docs/api/books) given that the user has an ISBN code to search for a book. Once an ISBN code is entered in the search field, a book will be returned from the API and can be added to the user's book list. Once the user has built their book list, they are able to sort, remove, and shift books up or down in the list. The user can also press on the display details button under a specific book in the list to display a page containing more information on the book using the data requested from the API. 

##### Vuex
This application was built as if it would become a larger-scale application in the future. With this Vue application needing communication between components without a parent-child relationship, a centralized state storage was necessary for mutating and sending data for the components in a clean and predictable way. Mutators and getters in the store modules were tested using Jest.

Actions are dispatched when events are triggered in Vue components. These actions use axios to make HTTP requests to Laravel in order to send or receive data from the database. Corresponding mutations are then called within the axios HTTP request (if successful) to commit changes to the state. This allows for the Vue application to reflect the data in the database and for the database to collect new data from the user's interactions on the Vue application.

#### Server - Laravel
The book models in Laravel contain the same data fields as the data requested in the Vue front-end. As mentioned above, the Vue application sends data to the Laravel api to hold on to (such as the books stored in a user's booklist) so that when the Vue application is refreshed, the same books the user entered from a previous session are restored. 

The Laravel server is structured as a RESTful api and contains GET, POST, and DELETE requests as of now for the Vue application to call whenever it needs to pull up a user's booklist, add a book, and remove a book. The database is sqlite.

Although there is no user account implementation yet, this will be created in the future to ensure any user who visits the website can "create an account" and have a user-specific book list.

##### Postman Collection
A postman collection is provided for testing the Laravel api.

## Prerequisites:
You must have Node.js and NPM are installed on your machine to be able to compile Vue assets. Ensure they are installed using:
```
node -v
npm -v
```
You also need several installations for Laravel. Please go to their installation page (https://laravel.com/docs/5.8/installation) and make sure the server requirements and Composer are installed.

## Installation
#### Installing Dependencies for Vue
```
npm install
npm install vue-awesome
npm install bootstrap-vue bootstrap
```
#### Installing Dependencies for Laravel
```
composer install
```

## Run Application
Run the following command to make sure Laravel Mix compiles Vue assets:
```
npm run dev
```
To start the Laravel server, run: 
```
php artisan serve
```
## Run Tests
#### Laravel Unit Tests
Make sure phpunit is installed. If not, run:
```
sudo apt install phpunit
```
Run the following command from the project root directory:
```
phpunit
```

#### Vue Unit Tests
Run the following command from the project root directory:
```
npm test
```
