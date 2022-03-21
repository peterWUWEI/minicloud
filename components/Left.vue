<template>
    <div class="left">
		<div class="logo">
			<nuxt-link :to="localePath('/')"> <img src="/logo.png" /> </nuxt-link>
		</div>
        <b-nav vertical>
            <b-nav-item>
                <nuxt-link :to="localePath('services')"> {{ $t('services') }} </nuxt-link>
            </b-nav-item>
            <b-nav-item>
                <nuxt-link :to="localePath('news')"> {{ $t('news') }} </nuxt-link>
            </b-nav-item>
            <b-nav-item>
                <nuxt-link :to="localePath('about')"> {{ $t('about') }} </nuxt-link>
            </b-nav-item>
            <b-nav-item>
                <nuxt-link :to="localePath('investorinfo')"> <span style="letter-spacing: 9px;">IR</span> {{ $t('investors') }} </nuxt-link>
            </b-nav-item>
            <b-nav-item>
                <nuxt-link :to="localePath('sustainability')"> {{ $t('sustainability') }} </nuxt-link>
            </b-nav-item>
            <b-nav-item>
                <nuxt-link :to="localePath('contacts')"> {{ $t('contact') }} </nuxt-link>
            </b-nav-item>
            <b-nav-item>
                <Language-selector/>
            </b-nav-item>
        </b-nav>
		<div class="bottom">
			<div class="info">
				<ul class="no-bullets">
					<li> 
                        <nuxt-link :to="localePath('sitemap')"> {{ $t('sitemap') }} </nuxt-link> 
                    </li>
					<li>
                        <nuxt-link :to="localePath('sitepolicy')"> {{ $t('sitepolicy') }} </nuxt-link> 
                    </li>
				</ul>
			</div>
			<div class="copyright">
				©   2022   株式会社ミニクラウド
			</div>
		</div>
	</div>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue';

export default {
    components: { LanguageSelector },
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
        overflow-y: auto;
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

    .left .boottom .copyright {
        width: 100%;
        line-height: 50px;
    }

    ul.no-bullets {
        list-style-type: none; /* Remove bullets */
        padding: 0;
        margin: 0;
    }
</style>