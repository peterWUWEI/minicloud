<template>
    <div id="mask" class="mask hide">
		<ul>
			<li>
                <nuxt-link to="/products"> 产品・服务 </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/news"> 新闻・通知 </nuxt-link>
            </li>
            <li>
                企业・招聘
            </li>
            <a href><li><span style="letter-spacing: 9px;float: none;">IR</span>・公告</li></a>
            <a href><li>可持续发展</li>`</a>
            <a href><li><li>访问・联系</li></a>
		</ul>
		<div style="width: 100%;position: absolute;bottom: 100px;font-size: 14px;text-align: center; color: #999">
			<ul style="display: flex;justify-content: space-between;text-align: center; margin-bottom: 30px;">
				<li style="height:20px;line-height:20px;font-size: 14px;color: #ccc; border-right: 1px solid #fff; "><a href style="color: #fff;">网站地图</a></li>
				<li style="height:20px;line-height:20px;font-size: 14px;color: #ccc;"><a href style="color: #fff;">网站政策</a></li>
			</ul>
			© 2020 株式会社ミニクラウド
		</div>
	</div>
</template>

<script>
    export default {
        name: 'maskContent'
    }
</script>

<style scoped>
    .mask {
        width:100%;
        height: 100%; 
        min-height: 550px; 
        position: absolute;
        background:#000; 
        top:-100%; 
        bottom:0; 
        color: #fff;
        opacity:0.95;
        transition: top 0.6s;
    }

    .mask a {
        color: #fff;
        text-decoration: none;
    }

    .mask ul {
        margin-top: 30px;
    }

    .mask ul li {
        width: 100%;
        line-height: 50px;
        font-size: 18px; 
        padding:0 10% 0 10%;
        box-sizing: border-box;
    }

    .mask ul li span {
        float: right;
        font-size: 18px;
    }
</style>
