<template>
  <div id="home">
    <section id="aboutSection">
      <div id="aboutContainer">
        <h1 id="title">Reading List</h1>
        <p id="lead">Search the Open Library database to find books and add them to your book list.</p>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <Search/>
        </div>
        <div class="col-md-5">
          <BookList/>
        </div>
      </div>
    </div>
    <BookDetails/>
  </div>
</template>

<script>
import BookList from '../components/book-list/BookList.vue'
import Search from '../components/search-books/Search.vue'
import BookDetails from '../components/book-details/BookDetails.vue'

export default {
  name: 'app',
  components: {
    Search,
    BookList,
    BookDetails
  }
}
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: auto;
}


#aboutSection {
  padding: 50px;
}

#aboutContainer {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
}

#title {
  font-weight: 300;
}

#lead {
  color: #6c757d;
  font-size: 1.2em;
  font-weight: 300;
}
</style>
