import { shallowMount } from '@vue/test-utils'
import AddBook from '../../components/search-books/AddBook'

describe('AddBook', () => {
    it('renders cover image for the book from props.coverPath', () => {
        const coverPath = 'testCover.jpg'
        const wrapper = shallowMount(AddBook, {
            propsData: {
                coverPath
            }
        })
        const element = wrapper.find('.card-img-top')
        expect(element.attributes('src')).toBe('testCover.jpg')
    })

    it('renders title for the book from props.author', () => {
        const title = 'testTitle'
        const wrapper = shallowMount(AddBook, {
            propsData: {
                title
            }
        })
        const element = wrapper.find('#book-title')
        expect(element.text()).toBe('testTitle')
    })

    it('renders author name for the book from props.author', () => {
        const author = 'testAuthor'
        const wrapper = shallowMount(AddBook, {
            propsData: {
                author
            }
        })
        const element = wrapper.find('#author')
        expect(element.text()).toBe('testAuthor')
    })
})