<template>
    <div id="bookdetails">
        <transition name="slide-fade">
        <div id="drawer" v-if="$store.getters.showDetailsPage">
            <div id="content">
                <button
                    @click="closeDetailsPage"
                    id="closeDetailsButton"
                    class="btn btn-outline-light">
                    <v-icon name="times"/>
                </button>
                <br>
                <img id="detailsImage" v-bind:src="$store.getters.selectedBookDetails.coverPath">
                <h4>{{ $store.getters.selectedBookDetails.title }}</h4>
                <h5>{{ $store.getters.selectedBookDetails.author }}</h5>
                <br>
                <br>
                <p>Publisher: {{ $store.getters.selectedBookDetails.publisher }}</p>
                <p>Publish Date: {{ $store.getters.selectedBookDetails.publishDate }}</p>
                <p>ISBN: {{ $store.getters.selectedBookDetails.isbn }}</p>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'bookdetails',
    methods: {
        closeDetailsPage() {
            this.$store.commit("closeBookDetailsPage")
        },
    }
}
</script>

<style scoped>
#drawer {
  display: block;
  min-height: 100%;
  background-color: #2c2c2c;
  position: fixed;
  z-index: 1;
  top: 0;
  /* overflow-x: hidden; */
  /* padding-top: 60px; */
  color: #ffffff;
  transition: all 0.1s ease-out;
}

.close {
    color: #ffffff;
}

#closeDetailsButton {
    margin-top: 20px;
    margin-right: 20px;
    margin-bottom: 40px;
    float: right;
}

#detailsImage {
    padding: 0 100px 20px 100px;
}



/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  /* transform: translateX(10px); */
  opacity: 0;
}
</style>