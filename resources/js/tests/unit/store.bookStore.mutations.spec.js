import { bookStore } from '../../store/modules/bookStore'

describe('mutations', () => {
    it('adds a book to "state.books" array using ADD_BOOKS mutation', () => {
        // mock state
        const state = { books: [] }
        // apply mutation
        const book = {
            isbn: 'isbn',
            title: 'title',
            coverPath: 'coverPath',
            author: 'author',
            publisher: 'publisher',
            publishDate: 'publishDate',
        }
        
        bookStore.mutations.ADD_BOOK(state, book)
        
        expect(state.books).toEqual(
            [
                {
                    isbn: 'isbn',
                    title: 'title',
                    coverPath: 'coverPath',
                    author: 'author',
                    publisher: 'publisher',
                    publishDate: 'publishDate',
                }
            ]
        )
    })

    it('removes a book from "books.store" using the "removeBookFromUserList" mutation', () => {
        const state = {
            books: [
                {
                    isbn: 'isbn',
                    title: 'title',
                    coverPath: 'coverPath',
                    author: 'author',
                    publisher: 'publisher',
                    publishDate: 'publishDate',
                }
            ]
        }

        bookStore.mutations.REMOVE_BOOK(state, 'isbn')
        expect(state.books).toEqual([])
    })

    it('sorts the book titles in "state.books" in ascending alphabetical order using the "sortsBooksAlphabeticallyAscending" method', () => {
        const state = {
            books: [
                { title: 'Btitle' }, 
                { title: 'Ctitle' },
                { title: 'Atitle' }
            ]
        }

        bookStore.mutations.sortBooksAlphabeticallyAscending(state)
        expect(state.books).toEqual([
            {title: 'Atitle'}, { title: 'Btitle'}, {title: 'Ctitle' }
        ])
    })

    it('sorts the book titles in "state.books" in descending alphabetical order using the "sortsBooksAlphabeticallyAscending" method', () => {
        const state = {
            books: [
                { title: 'Btitle' }, { title: 'Ctitle' }, { title: 'Atitle' }
            ]
        }

        bookStore.mutations.sortBooksAlphabeticallyDescending(state)
        expect(state.books).toEqual([
            { title: 'Ctitle'}, { title: 'Btitle'}, {title: 'Atitle' }
        ])
    })

    it('shifts the target book to the left one in "state.books" using the "shiftBookUp" method', () => {
        const state = {
            books: [
                { isbn: '1111' }, { isbn: '2222' }, { isbn: '3333' }
            ]
        }

        bookStore.mutations.shiftBookUp(state, '3333')
        expect(state.books).toEqual([
            { isbn: '1111' }, { isbn: '3333' }, { isbn: '2222' }
        ])

    })

    it('shifts the target book to the right one in "state.books" using the "shiftBookDown" method', () => {
        const state = {
            books: [
                { isbn: '1111' }, { isbn: '2222' }, { isbn: '3333' }
            ]
        }

        bookStore.mutations.shiftBookDown(state, '1111')
        expect(state.books).toEqual([
            { isbn: '2222' }, { isbn: '1111' }, { isbn: '3333' }
        ])

    })

    it('sets "state.showDetailsPage" to false using the "closeBookDetailsPage" method', () => {
        const state = {
            showDetailsPage: true
        }

        bookStore.mutations.closeBookDetailsPage(state)
        expect(state.showDetailsPage).toBe(false)
    })

    it('sets "state.selectedBookDetails" to hold target book using the "selectBookForDetails" method', () => {
        const state = {
            books: [{ isbn: '1111' }], 
            selectedBookDetails: null
        }

        bookStore.mutations.selectBookForDetails(state, '1111')
        expect(state.selectedBookDetails).toEqual({ isbn: '1111'})
    })
})