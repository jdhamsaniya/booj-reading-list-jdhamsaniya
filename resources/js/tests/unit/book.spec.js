import { shallowMount } from '@vue/test-utils'
import Book from '../../components/book-list/Book'

describe('Book', () => {
    it('renders cover image for the book from props.coverPath', () => {
        const coverPath = 'testCover.jpg'
        const wrapper = shallowMount(Book, {
            propsData: {
                coverPath
            }
        })
        const element = wrapper.find('#book-cover-image')
        expect(element.attributes('src')).toBe('testCover.jpg')
    })

    it('renders title of book from props.title', () => {
        const title = 'testTitle'
        const wrapper = shallowMount(Book, {
            propsData: {
                title
            }
        })
        const element = wrapper.find('#book-title')
        expect(element.text()).toBe('testTitle')
    })

})