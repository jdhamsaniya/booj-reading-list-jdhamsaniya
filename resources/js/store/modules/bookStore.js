import axios from "axios"

/*
|-------------------------------------------------------------------------------
| VUEX modules/bookStore.js
|-------------------------------------------------------------------------------
| The Vuex data store for the user's book list
*/

/**
 * Exports the bookStore module
 */
export const bookStore = {
    state: {
        /**
         * books is an array of book, each of which contains 
         * id, isbn, title, coverPath, author, publisher, publishDate, created_at, & updated_at JSON fields
         */
        books: [],
        /**
         * showDetailsPage will turn true when book is selected on book list.
         * Used in BookDetails.vue to bring up details page for the selected book.
         */
        showDetailsPage: false,
        /**
         * selectedBookDetails contains a single Book object after it was clicked on the list.
         * Used in BookDetails.vue to bring up details of selected book.
         */
        selectedBookDetails: null,
    },

    mutations: {
        /**
         *  Called by getBooks() action 
         */
        GET_BOOKS(state, data) {
            for(var book in data) {
                state.books.push( data[book])
            }
        },
        /**
         * Takes in book array selected by user in AddBook.vue after addBook dispatch
         * and formats it into JSON before pushing it into state.books array
         */
        ADD_BOOK(state, book) {
            state.books.push(book)
        },
        /**
         * Takes in Book isbn and finds out the index position of the Book in state.books.
         * Then removes this book.
         */
        REMOVE_BOOK(state, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn)
            state.books.splice(position, 1)
        },
        /**
         * Compares title of books in state.books and sorts them alphabetically in ascending order
         */
        sortBooksAlphabeticallyAscending(state) {
            state.books.sort((book1, book2) =>
                book1.title.localeCompare(book2.title))
        },

        /**
         * Compares title of books in state.books and sorts them alphabetically in descending order
         */
        sortBooksAlphabeticallyDescending(state) {
            state.books.sort((book1, book2) =>
                book2.title.localeCompare(book1.title))
        },

        /**
         * Shifts book up one in the queue/list
         */
        shiftBookUp(state, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn)
            //let sizeOfBooks = state.books.length
            let tempBooksArray = state.books

            if(position != 0) {
                var targetBook = tempBooksArray[position]
                tempBooksArray.splice(position, 1)
                tempBooksArray.splice((position - 1), 0, targetBook)
            }

            state.books = tempBooksArray
        },

        /**
         * Shifts the book down one in the queue/list
         */
        shiftBookDown(state, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn)
            let sizeOfBooks = state.books.length
            let tempBooksArray = state.books

            if(position != (sizeOfBooks - 1)) {
                var targetBook = tempBooksArray[position]
                tempBooksArray.splice(position, 1)
                tempBooksArray.splice((position + 1), 0, targetBook)
            }

            state.books = tempBooksArray
        },

        /**
         * Closes BookDetails page when close button is pressed.
         */
        closeBookDetailsPage(state) {
            state.showDetailsPage = false
        },

        /**
         * Changes state.selectedBookDetails to hold Book object that was selected on list
         * for display on the BookDetails page.
         * Also opens BookDetails page 
         */
        selectBookForDetails(state, isbn) {
            state.showDetailsPage = true
            let position = state.books.findIndex(book => book.isbn === isbn)
            state.selectedBookDetails = state.books[position]
        }
    },
    actions: {
        /**
         *  Asynchronously sends GET request to laravel api to receive all books currently in the database.
         * Commits mutation 'GET_BOOKS' to add books in database to store.books array when Home.vue is loaded
         */
        getBooks({commit}) {
            axios.get('/api/books').then( response => {
                commit('GET_BOOKS', response.data.data)
                console.log('All books obtained from database')
            }).catch(err => {
                console.log(err)
            })
        },
        /**
         * Asynchronously sends POST request to laravel api to store book in database. 
         * Commits mutation 'ADD_BOOK' to add book to state.books array above
         */
        addBook({commit}, book) {
            // TODO add if statement for preventing database duplicates
            axios.post('/api/books', book).then(response => {
                commit('ADD_BOOK', response.data.data)
                console.log('Added book to database')
            }).catch(err => {
                console.log(err)
            })
        },
        /**
         * Asynchronously sends DELETE request to laravel api to delete certain book in database.
         * Commits mutation 'REMOVE_BOOK' to remove book from state.books array 
         */
        removeBook({commit, state}, isbn) {
            let position = state.books.findIndex(book => book.isbn === isbn)
            let id = state.books[position].id
            axios.delete('/api/books/' + id).then(
                commit('REMOVE_BOOK', isbn),
                console.log('Removed book from the database')
            ).catch(err => {
                console.log(err)
            })
        },
    },

    getters: {
        books: state => state.books,
        showDetailsPage: state => state.showDetailsPage,
        selectedBookDetails: state => state.selectedBookDetails,
    }


}