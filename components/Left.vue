<template>
    <div class="left">
		<div class="logo">
			<a href><img src="../images/logo.png"></a>
		</div>
		<div class="nav">
			<ul>
				<li>
                    <nuxt-link to="/products"> 产品・服务 </nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/news"> 新闻・通知 </nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/corporate"> 企业・招聘 </nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/notices"> <span style="letter-spacing: 9px;">IR</span>・公告 </nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/sustainbility"> 可持续发展 </nuxt-link>
                </li>
				<li>
                    <nuxt-link to="/connect"> 访问・联系 </nuxt-link>
                </li>
				<li><form action="__URL__/search" method="get" id="search"><input class="input-search" name="keyword" size="5" style="width: 100px;padding-right: 30px;box-sizing: border-box;"><img src="../images/icon-search.png" width="25" alt=""  style="line-height: 50px;vertical-align: middle; margin-left: -30px;" onclick="document.getElementById('search').submit();" ></form> </li>
				<li>
					<select class="input-search"  onchange="langChange(this.value);" style="margin-top: 10px;;">
						<option value="cn">简体中⽂</option>
						<option value="tw">繁體中⽂</option>
						<option value="jp">日本語</option>
						<option value="en">English</option>
					</select>
				</li>
			</ul>
		</div>
		<div class="bottom">
			<div class="info">
				<ul>
					<a href><li>⽹站地图</li></a>
					<li style="width: 2%">|</li>
					<a href><li>⽹站政策</li></a>
				</ul>
			</div>
			<div class="copyright">
				©   2020   株式会社ミニクラウド
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'LeftContent'
    }
</script>

<style scoped>
    .left {
        width:300px;
        height: calc(100% - 100px);
        float: left;
        min-height: 500px; 
        background: #ffffff;
        padding-left: 50px;
        box-sizing: border-box;
        overflow: hidden;
        position: fixed; 
        top:0; 
        bottom: 0;
    }

    .left .logo {
        margin-top: 60px;
        width: 100px;
    }

    .left .logo img {
        width: 100%;
    }

    .left .nav {
        margin-top: 60px;
    }

    .left .nav li{
        line-height: 50px;
        font-size: 18px;
    }

    .left .nav a{
        color: #000;
        text-decoration-line: none;
    }

    .left .bottom{
        width:300px;
        height: 100px;
        background: #fff;
        position:fixed;
        left:0;
        bottom: 0; 
        font-size: 13px;
        color: #000;
        text-align: center;
    }

    .left .bottom .info{
        width:100%;
        height: 50px;
    }

    .left .bottom .info ul li{
        width:49%;
        color: #000;
        float: left;
        line-height: 50px;
    }
</style>