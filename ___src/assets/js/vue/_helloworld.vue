<template>
  <div>
    <h2>Hello World</h2>
    <div class="vue__inner">
      <p>
        {{ message }}
      </p>
    </div>
  </div>
</template>
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
