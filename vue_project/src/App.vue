<template>
<div>
  <p>
    {{msg}}
  </p>
  <input type="text" v-model="msg">
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world'
    }
  }
}
</script>

<style>

</style>
