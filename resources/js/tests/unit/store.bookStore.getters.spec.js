import { bookStore } from '../../store/modules/bookStore'

/**
 * Tests the books getter in the books module of the Vuex store
 */
test('books returns an array of book if it has any book', () => {
    const state = {
        books: [
            {
                name: 'A Man Called Ove',
                isbn: '9781476738024',
                title: 'A Man Called Ove',
                coverPath: 'https://covers.openlibrary.org/b/id/8314262-M.jpg',
                author: 'Fredrik Backman',
                publisher: 'Washington Square Press',
                publishDate: 'May 05, 2015',
            },
            {
                name: 'To Kill a Mockingbird',
                isbn: '9780060935467',
                title: 'To Kill a Mockingbird',
                coverPath: 'https://covers.openlibrary.org/b/id/8758697-M.jpg',
                author: 'Harper Lee',
                publisher: 'Perennial Classics',
                publishDate: '2002',
            }
        ]
    }

    expect(bookStore.getters.books(state)).toEqual([
        {
            name: 'A Man Called Ove',
            isbn: '9781476738024',
            title: 'A Man Called Ove',
            coverPath: 'https://covers.openlibrary.org/b/id/8314262-M.jpg',
            author: 'Fredrik Backman',
            publisher: 'Washington Square Press',
            publishDate: 'May 05, 2015',
        },
        {
            name: 'To Kill a Mockingbird',
            isbn: '9780060935467',
            title: 'To Kill a Mockingbird',
            coverPath: 'https://covers.openlibrary.org/b/id/8758697-M.jpg',
            author: 'Harper Lee',
            publisher: 'Perennial Classics',
            publishDate: '2002',
        }
    ])
})

/** 
 * Tests showDetailsPage getter from books module in Vuex store
 */
test('showDetailsPage returns true if state.showDetailsPage is true', () => {
    const state = {
        showDetailsPage: true
    }
    expect(bookStore.getters.showDetailsPage(state)).toBe(true)
})

test('showDetailsPage returns false if state.showDetailsPage is false', () => {
    const state = {
        showDetailsPage: false
    }
    expect(bookStore.getters.showDetailsPage(state)).toBe(false)
})