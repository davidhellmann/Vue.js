<template>
  <div class="hello">
    <h2>Hello World</h2>
    <div class="vue__inner">
      <p>
        {{ message }}
      </p>
      <p>
        <input v-model="message">
      </p>
      <pre>
        {{ $data }}
      </pre>
    </div>
  </div>
</template>

<style>
  .hello {
    background-color: #e8e8e8;
    padding: 40px;
  }
</style>


<script>
  export default{
    name: 'hello',
    data(){
      return{
        message: 'hello vue'
      }
    }
  }
</script>
