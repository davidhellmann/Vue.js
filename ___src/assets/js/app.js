/**
 * Bundle Scripts
 */


// Vendor
import Vue from 'vue'
import hello from './vue/_helloworld.vue'
import step02 from './vue/laracast/step_02.vue'
import step03 from './vue/laracast/step_03.vue'


new Vue({
    el: '#app',
    components: {
        hello,
        step02,
        step03
    }
})

// Personal
import './partials/bodyclass'
import './partials/example'
import './partials/lazyloading'
import './partials/scrollto'
import './partials/pagetransition'
import './partials/photoswipe'
// import './partials/matchHeight'
// import './partials/waypoints.anime'
