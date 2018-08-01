<template>
  <div id="app">
    <headers></headers>
   
    <navs></navs>  
    <div class="main">
      <router-view/>
    </div>

    <footers></footers>
  </div>
</template>

<script>

import headers from "./components/header"
import footers from "./components/footer"
import navs from "./components/nav"
export default {
  components :{
    headers,
    footers,
    navs
  }
  
}
</script>

<style>
  @import url("./common/css/iconfont.css");
  @import url("./common/css/style.css");
</style>
