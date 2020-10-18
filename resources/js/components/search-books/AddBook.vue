<template>
    <div id="addbook">
        <h3>Search Results</h3>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 id="book-title" class="card-title">{{ title }}</h5>
                        <p id="author">{{ author }}</p>
                        <button 
                            @click="addToUserList" 
                            type="button" 
                            class="btn btn-primary btn-sm">
                            Add to List
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="error-text" v-if="error">
            {{ title }} (ISBN: {{ isbn }}) is already in your book list.
        </p>
    </div>
</template>

<script>
export default {
    name: 'addbook',
    props: { 
        isbn: String,
        title: String,
        coverPath: String,
        author: String,
        publisher: String,
        publishDate: String,
    },

    data () {
        return {
            error: false,
        }
    },

    methods: {
        /**
         * Adds book to Vuex data store in books module if not already in user's book list
         * Uses dispatch() to call addBook action, which does a POST request
         * to the laravel API to add a book to the database.
         * It then commits a mutation to add the book to the Vuex store
         */
        addToUserList() {
            var potentialBook = [this.isbn, this.title, this.coverPath, this.author, this.publisher, this.publishDate]
            var found = false

            for( var i = 0; i < this.$store.getters.books.length; i++) {
                if(this.$store.getters.books[i].isbn == this.isbn) {
                    found = true
                    break
                }
            }

            if(!found) {
                this.$store.dispatch("addBook", {
                    isbn: this.isbn,
                    title: this.title,
                    coverPath: this.coverPath,
                    author: this.author,
                    publisher: this.publisher,
                    publishDate: this.publishDate,
                })
                this.error = false
            }
            else {
                this.error = true
            }
        }
    }
}
</script>

<style scoped>

#addbook {
    padding-top: 50px;
}

.card {
    max-width: 500px;
    margin: auto;
    height: 50%;
}

.card-img-top {
    padding: 5px;
    object-fit: cover;
}

.error-text {
    color: red;
    font-weight: bold;
}
</style>