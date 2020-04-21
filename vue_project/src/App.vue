<template>
  <div>
    <myheader></myheader>
    <toppage></toppage>
    <aboutme></aboutme>
    <myskills></myskills>
    <contactme></contactme>
  </div>
</template>

<script>
import myheader from './components/myheader'
import toppage from './components/topPage'
import aboutme from './components/aboutMe'
import myskills from './components/mySkills'
import contactme from './components/contactMe'

export default {
  components: {
    myheader,
    toppage,
    aboutme,
    myskills,
    contactme
  }
}
</script>

<style>
</style>
