<template>
<div>
  <myheader></myheader>
  <p>
    {{msg}}
  </p>
  <input type="text" v-model="msg">
</div>
</template>

<script>
import myheader from './components/myheader'

export default {
  components: {
    myheader
  },
  data () {
    return {
      msg: 'Hello world'
    }
  }
}
</script>

<style>

</style>
