<template>
  <header>
    <div class="header-list">
      <nuxt-link v-scroll-to="'#top'" to>
        Top
      </nuxt-link>
      <nuxt-link v-scroll-to="'#about'" to>
        About
      </nuxt-link>
      <nuxt-link v-scroll-to="'#skills'" to>
        Skills
      </nuxt-link>
      <nuxt-link v-scroll-to="'#contacts'" to>
        Contacts
      </nuxt-link>
    </div>
  </header>
</template>

<script>
</script>

<style>
header {
  font-size: 20px;
  border: solid #CCCCCC;
  border-width: 1px 0;
  margin-top: 10px;
  padding: 10px 0;
  text-align: center;
}

nuxt-link {
  border-left: solid 1px #CCCCCC;
  display: inline-block;
  width: 250px;
}

nuxt-link:first-child {
  border-left: none;
}

</style>
