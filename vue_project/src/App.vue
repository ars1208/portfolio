<template>
  <div>
    <header>
      <div class="header-logo">
        My logo
      </div>
      <nav class="header-list">
        <ul>
          <li><a href="#">Top</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
</script>

<style>
header {
  height: 70px;
  width: 100%;
}

.header-logo {
  display: inline-block;
  float: left;
  line-height: 70px;
  padding-left: 20px;
  padding-right: 20px;
}

.header-list {
  float: right;
  height: 70px;
}

.header-list ul {
  list-style: none;
  display: inline-block;
  height: 70px;
  margin: 0;
  padding: 0;
}

.header-list li {
  float: left;
}

.header-list a {
  color: inherit;
  display: block;
  padding: 20px 40px;
  margin: 3px 10px;
  text-decoration: none;
}

.header-list a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

</style>
