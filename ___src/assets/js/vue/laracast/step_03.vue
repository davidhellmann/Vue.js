<template>
  <div class="vue__inner">

      <button type="submit" @click="updateCount">
        Increment Counter: {{ count }}
      </button>

  </div>
</template>

<style>

</style>

<script>
  export default{
    data(){
      return{
        count: 0
      }
    },

    methods: {
      updateCount: function () {
        this.count += 1;
      }
    }
  }
</script>
