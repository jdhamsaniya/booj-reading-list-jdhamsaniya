<template>
    <div id="book">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-2">
                    <img id="book-cover-image" v-bind:src="coverPath" class="card-img-top">
                </div>
                <div class="col-md-8">
                    <div class="card-title">
                        <p id="book-title">{{ title }}</p>
                        <button 
                            @click="selectForDetails"
                            class="btn btn-primary btn-sm">
                            Display Details
                        </button>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="card-body">
                    <button 
                        @click="shiftUp"
                        class="btn btn-link">
                        <v-icon name="chevron-up"/>
                    </button>
                    <button 
                        @click="removeFromUserList" 
                        id="remove" 
                        class="btn btn-link">
                        <v-icon name="minus"/>
                    </button>
                    <button 
                        @click="shiftDown" 
                        class="btn btn-link">
                        <v-icon name="chevron-down"/>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Book',
    props: {
        isbn: String,
        title: String,
        coverPath: String,
    },

    methods: {
        // removes book item from list after pressing using Vuex books module
        removeFromUserList() {
            this.$store.dispatch("removeBook", this.isbn)
        },
        // shifts book item up in the list using Vuex books module
        shiftUp() {
            this.$store.commit("shiftBookUp", this.isbn)
        },
        // shifts book item down in the list using Vuex books module
        shiftDown() {
            this.$store.commit("shiftBookDown", this.isbn)
        },
        // selects this book item in Vuex books module to hold this book data for BookDetails.vue
        selectForDetails() {
            this.$store.commit("selectBookForDetails", this.isbn)
        }
    }
}
</script>

<style scoped>
.shiftButton {
    background-color: #ffffff;
}

.card-body {
    padding: 0 0 0 50%;
}

#remove {
    color: red;
}

#book-title {
    padding: 5% 0 0 0;
    margin-bottom: 5px;
}
</style>