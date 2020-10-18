// https://vue-test-utils.vuejs.org/guides/testing-async-components.html

import { shallowMount } from '@vue/test-utils'
import Search from '../../components/search-books/Search'
jest.mock('axios')

describe('Search', () => {
    it('fetches async when submit button is clicked', () => {
        const wrapper = shallowMount(Search)
        wrapper.find('button').trigger('click')
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.loaded).toBe(false)
        })
    })
})