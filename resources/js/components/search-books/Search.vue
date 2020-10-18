<template>
    <div id="search">
        <h3>Search for a Book</h3>
            <form @submit.prevent="onSubmit()">
                <input id="inputField" type="text" v-model.trim="searchInput">
                <button 
                    type="submit" 
                    value="Submit" 
                    class="btn btn-primary">
                    <v-icon name="search"/>
                </button>
                <br>
                By:
                <input type ="radio" name="ISBN" value="ISBN" v-model="searchType"> ISBN
            </form>

            <AddBook 
                v-if="loaded"
                v-bind:key="isbn"
                :isbn="isbn"
                :title="title" 
                :coverPath="coverPath"
                :author="author"
                :publisher="publisher"
                :publishDate="publishDate">
            </AddBook>

            <p v-if="errored" id="errored">Could not find book in the database. Please try again or use other code.</p>
    </div>
</template>

<script>
import axios from 'axios'
import AddBook from './AddBook.vue'
import { OPEN_LIBRARY_API_URL, OPEN_LIBRARY_FORMAT_JSON_TAG, OPEN_LIBRARY_FORMAT_DATA_TAG } from '../../config'

/**
 *  Check https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html
 *  for examples on how to use axios
 */
export default {
    name: 'search',
    components: {
        AddBook
    },
    data () {
        return {
            isbn: '',
            title: '',
            coverPath: null,
            author: '',
            publisher: '',
            publishDate: '',
            searchInput: '',
            searchType: 'ISBN',
            loaded: false,
            errored: false,
            error: ''
        }
    },
    methods: {
        onSubmit() {
            var searchParameters = this.searchType + ":" + this.searchInput
            axios
                .get(OPEN_LIBRARY_API_URL + this.searchType + ":" + this.searchInput + OPEN_LIBRARY_FORMAT_DATA_TAG + OPEN_LIBRARY_FORMAT_JSON_TAG)
                .then(response => {
                    this.isbn = response.data[searchParameters].identifiers.isbn_13[0]
                    this.title = response.data[searchParameters].title
                    this.coverPath = response.data[searchParameters].cover.medium
                    this.author = response.data[searchParameters].authors[0].name
                    this.publisher = response.data[searchParameters].publishers[0].name
                    this.publishDate = response.data[searchParameters].publish_date
                    this.loaded = true
                    this.errored = false
                })
                .catch(error => {
                    this.error = error,
                    this.errored = true,
                    this.loaded = false
                })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#errored {
    color: red;
}

#inputField {
    padding: 5px;
}

.btn {
    margin-left: 5px;
}
</style>
