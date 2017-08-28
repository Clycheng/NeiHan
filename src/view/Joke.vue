<template>
  <div>
      <nav-header></nav-header>
      <section>
          <div class = 'content-left'>
              <ul id = "detail-list">
                  <li class = "detail-content" v-for = "item in DetailList">
                        <div class = 'content-left-warp'>
                            <div class = "content-left-head">
                                <div class = "head-portrait"><img :src= item.group.user.avatar_url alt=""></div>
                                <div class = "name-warp">
                                    <a href="#" class = "name">{{item.group.user.name}}</a>
                                    <p class = "time">{{item.group.category_name}}</p>
                                </div>
                            </div>
                            <div calss = "content-left-moidle">
                                <p class = "matter">{{item.group.content}}</p>
                                   <!-- <a :href=item.group.large_image.url_list[0].url><img :src=item.group.middle_image.url_list[0].url        alt=""> </a>   -->
                            </div>
                            <div class = "content-left-bottom">
                                	<ul>
                                            <li class="digg-wrapper ">
                                                <span class="digg">{{item.group.digg_count}}</span>
                                            </li>
                                            <li class="bury-wrapper ">
                                                <span class="bury">{{item.group.bury_count}}</span>
                                            </li> 
                                            <li class="repin-wrapper ">
                                                <span class="repin">{{item.group.repin_count}}</span>
                                            </li>

                                            <li class="share-wrapper right">
                                                <span class="share">{{item.group.comment_count}}</span>
                                            </li>
                                            <li class="post-comment-btn right">
                                                <span class="comment J-comment-count">{{item.group.share_count}}</span>
                                            </li> 
		                             </ul>
                            </div>
                        </div>
                    </li>
              </ul>
          </div>
           <side-bar></side-bar>
      </section>
  </div>
</template>

<script>
import NavHeader from '@/components/JokeHead'
import SideBar from '@/components/SideBar'
export default {
     name: 'Index',
     data:function() {
        return {
            DetailList: []
        }
     },
     components: {
        NavHeader,
        SideBar
    },
  mounted() {
      this.add()
  },
  methods: {
      add() {
          
          this.$http.get('api'+'?content_type=-102').then((response)=> {
              let res = response.data.data.data
            // console.log(response.data.data.data.uer);  
                this.DetailList = res;
                // this.Image = res.group.large_image.url_list
                console.log(res);
                // console.log(this.DetailList.group.user);

          })
          
      }
  }
  
}
</script>

<style>
section {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding-top:20px;
    padding-bottom: 2px; 
}
#detail-list li.detail-content {
    background: white;
}
section .content-left {
    width: 60%;
    float: left;
}
.content-left-warp {
    width: 100%;
    padding: 15px;
}
.content-left-head {
    overflow: hidden;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    height: 80px;
}
.head-portrait {
    float: left;
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 50%;
}
.head-portrait img {
    width: 100%;
    height: 100%;
}
.name-warp {
    float: left;
    margin-top: 10px;
    margin-left: 10px;
}
.name-warp .name{
    color: #505050;
    text-decoration: none;
}
.name-warp .time {
    margin-top: 10px;
}
.content-left-moidle {
    padding-top: 20px;
}
.content-left-moidle  p.matter{
    width: 100%;
    height: 100%;
    margin-top: 10px;
    font-size: 100%;
}
 .content-left-bottom {
     width: 100%;
     height: 32px;
     margin-top: 20px;
 }
 .content-left-bottom ul li.digg-wrapper {
    background-image:url("http://s3a.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/digg_7ad8226.png");
}
 .content-left-bottom ul li.bury-wrapper {
    background-image: url(http://s3.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/bury_2eed8c8.png);
}
 .content-left-bottom ul li.repin-wrapper {
    background-image: url(http://s3.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/repin_3a60097.png);
}
.content-left-bottom ul li.share-wrapper {
    background-image: url(http://s3a.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/share_67b66b0.png);
}
.content-left-bottom ul li.post-comment-btn {
    background-image: url(http://s3.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/comment_29f6e62.png);
}
 .content-left-bottom ul li  {
    float: left;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e9e9e9;
    font-size: 14px;
    color: #7e7e7e;
    margin-right: 12px;
    padding: 0 10px 0 35px;
    background: no-repeat;
    background-position: 10px center;
    cursor: pointer;
}
.right {
    float: right!important;
}
.content-right {
    float: left!important;
}
.sidebar {
    width: 30%;
    margin-left: 40px;
}
.left {
    float: left!important;
}
.sidebar .box {
    line-height: 1.4;
    background-color: #fff;
    padding: 24px;
}
.sidebar .box.base-info ul li .logo {
    width: 80px;
    height: 80px;
    border-radius: 15px;
}
.sidebar .box.base-info ul li .desc-wrapper {
    margin-left: 10px;
    width: 162px;
}
.left {
    float: left!important;
}
.sidebar .box.base-info ul li .desc-wrapper .h1 {
    font-size: 18px;
    color: #505050;
    margin-bottom: 12px;
}
.sidebar .box.base-info ul li .desc-wrapper .h2 {
    font-size: 12px;
    color: #7e7e7e;
    text-align: justify;
}
.sidebar .box.base-info ul li.star-score-item {
    margin-top: 24px;
    margin-bottom: 24px;
    overflow: hidden;
}
.sidebar .box.base-info ul li.star-score-item .star-score-wrapper {
    width: 134px;
    text-align: right;
    position: relative;
    top: 25px;
}
.sidebar .box.base-info ul li.star-score-item .star-score-wrapper .stars {
    overflow: hidden;
    display: inline-block;
    margin-bottom: 12px;
}
.sidebar .box.base-info ul li.star-score-item .star-score-wrapper .stars .star {
    display: block;
    float: left;
    background: url(//s3.bytecdn.cn/neihan/resource/neihan_web/static/image/site-v2/score_abc2489.png);
    width: 22px;
    height: 20px;
}
.sidebar .box.base-info ul li.star-score-item .star-score-wrapper .score {
    font-size: 12px;
    color: #7e7e7e;
}
.sidebar .box.base-info ul li.star-score-item .qrcode-wrapper .qrcode {
    width: 94px;
}
.sidebar .box.base-info ul li.download-btn-item {
    overflow: hidden;
}
.sidebar .box.base-info ul li.download-btn-item .btn.ios-dl-btn {
    border-right: 0;
}
.sidebar .box.base-info ul li.download-btn-item .btn {
    width: 124px;
    border: 1px solid #e9e9e9;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
}
.sidebar .box.base-info ul li.download-btn-item .btn.ios-dl-btn a {
    color: #00cfff;
}

.sidebar .box.base-info ul li.download-btn-item .btn {
    width: 124px;
    border: 1px solid #e9e9e9;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
}
.sidebar .box.base-info ul li.download-btn-item .btn.android-dl-btn a {
    color: #04e639;
}
.sidebar .box.qq-contact-info {
    margin-top: 20px;
    padding: 0;
}
.sidebar .box {
    line-height: 1.4;
    background-color: #fff;
    padding: 24px;
}
.sidebar .box.qq-contact-info .header {
    padding: 24px 24px 14px;
    line-height: 1;
    color: #ff819f;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 24px;
}
.sidebar .box.qq-contact-info ul {
    color: #7e7e7e;
    font-size: 14px;
    padding: 0 5px 24px 24px;
}
.sidebar .box.qq-contact-info ul li {
    height: 24px;
    line-height: 24px;
}
</style>