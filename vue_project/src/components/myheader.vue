<template>
  <header>
    <div class="header-list">
      <router-link to="/topPage">
        Top
      </router-link>
      <router-link to="/aboutMe">
        About
      </router-link>
      <router-link to="/mySkills">
        Skills
      </router-link>
      <router-link to="/contactMe">
        Contacts
      </router-link>
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

router-link {
  border-left: solid 1px #CCCCCC;
  display: inline-block;
  width: 250px;
}

router-link:first-child {
  border-left: none;
}

</style>
