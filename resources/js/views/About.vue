<template>
  <div class="about">
    <section id="aboutSection">
      <div id="aboutContainer">
        <h1 id="title">About</h1>
        <p id="lead">This page contains information about this application!</p>
      </div>
    </section>
    <div id="content">
      <p class="githubInfo">Please go <a href="https://github.com/jdhamsaniya/booj-reading-list-jdhamsaniya">here</a> to get more in-depth information on:</p>
      <ul>
        <li>Basic layout for the Vue application</li>
        <li>Vue application modules used such as vue-router</li>
        <li>Vuex state management implementation</li>
        <li>Specific frontend styling through Bootstrap 4 and Vue-Awesome icons</li>
        <li>Vue unit tests</li>
      </ul>
      <p class="githubInfo">You can also see the basic backend implementation using Laravel as well as the Postman collection for it.
      </p>
      <p class="githubInfo">Here are a couple of ISBNs to get you testing. They were found on the Amazon listing of the books:</p>
      <ul>
        <li>The Lies of Locke Lamora: 9780553588941</li>
        <li>A Man Called Ove: 9781476738024</li>
        <li>To Kill A Mocking Bird: 0060935464</li>
      </ul>
      <p class="githubInfo">All book information is currently being pulled from the Open Library Books API. You can find more information on this <a href="https://openlibrary.org/dev/docs/api/books">here</a></p>
    </div>
  </div>
</template>

<style scoped>
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

#content {
  max-width: 40rem;
  margin: auto;
  padding: 0 50px;
}

.githubInfo {
  text-align: left;
}

ul li {
  text-align: left;
}
</style>
