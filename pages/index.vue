<template>
  <div>
    <Left/>
    <div class="main body-bg" onclick="location.href='{$setting.imgurl2}'" style="cursor: pointer;" >
		<div class="content">
			<p style=" width: 100%; text-align: center; font-size: 72px; font-weight: bold; margin-top: 250px;"></p>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Left from '~/components/Left.vue'

  export default Vue.extend({
    components: { Left }
  })
</script>

<script>
  export default {
      head() {
          return {
              title: '株式会社ミニクラウド',
              meta: [
                  {
                      content: 'width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
                      charset: 'utf-8'
                  }
              ]
          }   
      }
  }

</script>

<style>
    body {
        background:#fafafa;
        display: flex;
    }

    .body-bg {
        background: url(../images/bg-index.jpg)no-repeat; 
        background-size: cover;
        background-position: center center;
        height: 100vh;
    }

    .hide {
        top:-100%!important;
        transition: top 0.6s;
    }

    .show {
        display: block;
    }

    .header {
        width: 100%;
        height: 60px;
        display: none;
    }

    .header .logo {
        width: 60px; 
        line-height: 60px; 
        float: left; 
        margin-left: 20px;
    }

    .header .logo img {
        width: 60px; 
        display: inline-block; 
        vertical-align: middle;
    }

    .header .lang {
        width: 100px;
        vertical-align: middle;
        float: right; 
        line-height: 60px;
    }

    .header .lang select {
        width: 100px; 
        height: 30px; 
        line-height: 30px; 
        border: 2px solid #000;
        border-radius: 12px; 
        text-indent: 5px; 
        font-size: 14px; 
        outline: none;
    }

    .header .nav {
        width: 30px; 
        line-height: 
        60px; float: right; 
        margin-right: 20px;
        height: 20px;
        margin-top: 20px;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }

    .header .close span:first-child {
        transform: rotate(-45deg);
        transform-origin: 25px 2px; 
        transition: transform 0.6s;
    }

    .header .close span:last-child {
        transform: rotate(45deg);
        transform-origin: 30px 0; 
        transition: transform 0.6s;
    }

    .header .close span:nth-child(2) {
        display: none;
    }
    
    .header .nav span {
        width:30px;
        height: 0px;
        display: block;
        border-bottom: 2px solid #000;
        transition: transform 0.6s;
    }

    .header .nav img {
        width: 40px; 
        display: inline-block; 
        vertical-align: middle;
    }

    .left .boottom .copyright{width: 100%;line-height: 50px;}
    .main{overflow: hidden; clear: both; margin-left: 300px;width: 100vw;}
    .main .content{text-align: center;margin-top: 300px; font-size: 50px}

    .main .top {
        width: 100%; 
        height: 200px; 
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
    }
    .main .top .title{font-size: 28px; margin-top: 50px; margin-left: 40px;color: #fff;}
    .main .top .maintitle{font-size: 18px; margin-top: 50px; margin-left: 40px;color: #fff;}
    .main .top .subtitle{font-size: 28px; margin-top: 10px; margin-left: 40px;color: #fff;}
    .main .content{width:96%; height: auto; margin: auto; margin-top: 30px; display: flex; justify-content: space-between; flex-wrap: wrap;}
    .main .content .item{width:30%; height: 150px; background: #ccc; float: left; text-align: center; line-height: 150px; font-size: 20px; margin-bottom: 20px;}
    .main .content a{color:#000;text-decoration-line: none;}

    .main .content .news-item{width:100%;height: 100px;text-align: left; font-size: 20px; margin-top:20px;}
    .main .content .news-item .item-left{width:80px;height: 80px;background:#ccc;border-radius: 80px;float: left;}
    .main .content .news-item .item-right{width: auto;height: 80px;float: left; margin-left: 30px;}
    .main .content .news-item .item-right .item-title{font-size:14px; color: #929292;line-height: 40px;  }
    .main .content .news-item .item-right .item-desc{font-size:20px; color: #000;line-height: 25px;}

    .main .content .inv-title{width: 100%; line-height: 60px; font-size: 24px;border-bottom: 2px solid #36225f;text-align: left;}
    .main .content .inv-item{width:100%;line-height: 30px; margin-top: 30px; font-size: 20px; text-align: left;}
    .main .content .inv-item img{width:20px;vertical-align: middle; margin-left: 30px;}
    .main .content .inv-item .icon-list{width:20px;vertical-align: middle;margin-left: 0;}


    .main .content .sd-title{width: 100%; line-height: 60px; font-size: 24px;border-bottom: 2px solid #36225f;text-align: left;}
    .main .content .sd-content{width:100%;line-height: 30px; margin-top: 30px; font-size: 16px; text-align: left; }
</style>