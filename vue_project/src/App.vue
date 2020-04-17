<template>
<div>
  <main></main>
  <p>
    {{msg}}
  </p>
  <input type="text" v-model="msg">
</div>
</template>

<script>
import main from './components/main'

export default {
  components: {
    main
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
