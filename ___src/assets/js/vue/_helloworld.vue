<template>
  <h2>Hello World</h2>
  <div class="vue__inner">
    <p>
      {{ message }}
    </p>
    <p>
      <input v-model="message">
    </p>
    <p>
      {{ $data | json }}
    </p>

  </div>
</template>

<style>

</style>

<script>
  export default{
    data(){
      return{
        message: 'Hello Dude, it\'s Vue.js!'
      }
    }
  }
</script>
