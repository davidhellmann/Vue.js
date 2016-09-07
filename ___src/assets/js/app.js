/**
 * Bundle Scripts
 */

// solltest du ersetzen durch aliasify
// hatte dazu zuletzt was in den channel geschrieben
import Vue from 'vue/dist/vue'

import hello from './vue/01_helloworld.vue'
new Vue({
    el: '#app',
    components: {
      hello
    }
})
