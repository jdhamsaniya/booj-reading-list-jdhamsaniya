/*
|-------------------------------------------------------------------------------
| VUEX store.js
|-------------------------------------------------------------------------------
| Builds the data store from all of the modules for the Reading List app
| More info here: https://vuex.vuejs.org/guide/
*/

/**
 * Adds the promise of polyfill for IE 11
 */
// require('es6-promise').polyfill();

/**
 * Imports Vue and Vuex
*/
import Vue from 'vue'
import Vuex from 'vuex'

/** 
 * Initializes Vuex on Vue
 */
Vue.use(Vuex)

/**
 * Imports all of the modules used in the application
 */
import { bookStore } from './modules/bookStore'

/**
 * Exports the data store
 */
export const store = new Vuex.Store({
    modules: {
        bookStore,
    }
})