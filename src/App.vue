<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body {
  font-size: 16px;
  background: rgb(243,243,243);
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
em,i {
  font-style: normal;
}
</style>
