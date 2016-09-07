<template>
  <form>
    <span class="error" v-show="!message">
      You must enter a message
    </span>

    <textarea v-model="message"></textarea>

    <button type="submit" v-show="message">
      Send Message
    </button>
  </form>

  <pre>
    {{ $data | json }}
  </pre>
</template>

<style>

</style>

<script>
  export default{
    data(){
      return{
        message: ''
      }
    }
  }
</script>
