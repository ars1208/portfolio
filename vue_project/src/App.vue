<template>
  <div>
    <myheader></myheader>
    <toppage></toppage>
    <aboutme></aboutme>
  </div>
</template>

<script>
import myheader from './components/myheader'
import toppage from './components/topPage'
import aboutme from './components/aboutMe'

export default {
  components: {
    myheader,
    toppage,
    aboutme
  }
}
</script>

<style>
</style>
