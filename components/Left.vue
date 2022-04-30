<template>
  <div class="left" v-bind:class="{ active: isActive }">
    <div class="logo">
      <nuxt-link :to="localePath('/')">
        <img src="/logo.png" />
      </nuxt-link>
    </div>
    <div>
      <a @click="changeActiveness()">
        <i class="fa-solid fa-list" id="btn"> </i>
      </a>
    </div>

    <b-nav vertical id="sidebar">
      <b-nav-item>
        <nuxt-link :to="localePath('services')">
          <i class="fa-brands fa-servicestack"></i>
          <span class="links_name"> {{ $t("services") }} </span>
        </nuxt-link>
      </b-nav-item>

      <b-nav-item>
        <nuxt-link :to="localePath('news')">
          <i class="fa-solid fa-bell"></i>
          <span class="links_name"> {{ $t("news") }} </span>
        </nuxt-link>
      </b-nav-item>

      <b-nav-item>
        <nuxt-link :to="localePath('about')">
          <i class="fa-solid fa-address-card"></i>
          <span class="links_name"> {{ $t("about") }} </span>
        </nuxt-link>
      </b-nav-item>

      <b-nav-item>
        <nuxt-link :to="localePath('investorinfo')">
          <i class="fa-solid fa-circle-info"></i>
          <span class="links_name">
            <span style="letter-spacing: 9px">IR</span> {{ $t("investors") }}
          </span>
        </nuxt-link>
      </b-nav-item>

      <b-nav-item>
        <nuxt-link :to="localePath('sustainability')">
          <i class="fa-solid fa-globe"></i>
          <span class="links_name"> {{ $t("sustainability") }} </span>
        </nuxt-link>
      </b-nav-item>

      <b-nav-item>
        <nuxt-link :to="localePath('contacts')">
          <i class="fa-solid fa-location-dot"></i>
          <span class="links_name"> {{ $t("contact") }} </span>
        </nuxt-link>
      </b-nav-item>

      <b-nav-item>
        <Language-selector />
      </b-nav-item>
    </b-nav>

    <div class="bottom">
      <div class="info">
        <ul class="no-bullets">
          <li>
            <nuxt-link :to="localePath('sitemap')">
              {{ $t("sitemap") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('sitepolicy')">
              {{ $t("sitepolicy") }}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="copyright">© 2022 株式会社ミニクラウド</div>
    </div>
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";
import "@fortawesome/fontawesome-free/js/all";

export default {
  data() {
    return {
      isActive: true,
    };
  },
  components: { LanguageSelector },
  name: "LeftContent",
  methods: {
    changeActiveness() {
      this.isActive = !this.isActive;
      // this.$emit('update:isActive', this.isActive)
    },
  },
};
</script>

<style scoped>
.left {
  width: 80px;
  height: 100%;
  float: left;
  min-height: 100vh;
  background: #ffffff;
  padding-left: 50px;
  box-sizing: border-box;
  overflow: auto;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 6px 14px;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.left::-webkit-scrollbar {
  display: none;
}

.left.active {
  width: 280px;
}

.left .logo {
  margin-top: 30px;
  display: flex;
  height: 50px;
  width: 120px;
  opacity: 0;
}

.left.active .logo {
  opacity: 1;
}

.left .logo img {
  width: 100%;
}

.left a #btn {
  margin-top: 50px;
  position: absolute;
  color: #000;
  left: 50%;
  top: 6px;
  font-size: 20px;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
}

.left.active a #btn {
  left: 90%;
}

.left #sidebar {
  margin-top: 60px;
  overflow: auto;
  height: 400px;
  overflow-y: scroll;
  flex-wrap: nowrap;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.left #sidebar::-webkit-scrollbar {
  display: none;
}

.left #sidebar li {
  position: relative;
  height: 80px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  border-radius: 12px;
  font-size: 18px;
}

.left #sidebar li a {
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 12px;
  white-space: nowrap;
}

.left #sidebar li a:hover {
  color: #11101d;
  background: #ececec;
}

.left .links_name {
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
}

.left.active .links_name {
  opacity: 1;
  pointer-events: auto;
}

.left #sidebar li a a svg {
  height: 30px;
  min-width: 30px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
  padding-right: 5px;
}

.left .bottom {
  width: 280px;
  height: 100px;
  padding-left: 40px;
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 20px;
  font-size: 13px;
  color: #000;
  text-align: center;
  opacity: 0;
  transition: all 0.5s ease;
}

.left.active .bottom {
  opacity: 1;
}

.left .bottom .info {
  width: 100%;
  height: 50px;
}

.left .bottom .info ul li {
  width: 49%;
  color: #000;
  float: left;
  line-height: 5px;
}

.left .bottom .info ul li a {
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
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
