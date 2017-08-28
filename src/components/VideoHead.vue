<template>
  <div class="head">
      <div class = "title">
        <div class = "image-warp">
          <img src="//s3a.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/logo_741b09e.png" alt="">
        </div>
      </div>
      <nav>
        <div class = "ul-warp">
            <ul class="nav nav-justified">
                <li ><router-link class="btn btn-m"  to="/">推荐</router-link></li>
                <li><router-link class="btn btn-m"  to="/image">图片</router-link></li>
                <li class="active"><router-link class="btn btn-m"  to="/video">视频</router-link></li>
                <li><router-link class="btn btn-m"  to="/joke">段子</router-link></li>
                <li><router-link class="btn btn-m"  to="/stream">直播</router-link></li>
                <li><router-link class="btn btn-m"  to="/show">段友秀</router-link></li>
            </ul>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'head',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn {
    border-radius: 0px;
}
 .head .title {
   background: rgb(255,129,159);
 }
 .head .title .image-warp {
   width: 80%;
   margin: 0 auto;
 }
 .head nav div.ul-warp{
   width: 80%;
   margin: 0 auto;
 }
 .head nav ul{
   overflow: hidden;
 }
  .head nav ul li {
      width: 15%;
      height: 100%;
  }
  .head nav ul li:hover a{
    background: rgb(255,129,159);
  }
  .head nav ul li a {
    color: white
  }
  .head nav ul li:hover {
    border-radius: none;
    background:white;
  }
  .head nav ul li.active {
    background: rgb(255,129,159);
  }
  nav {
    background: black;
  }
</style>
