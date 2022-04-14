<template>
    <div>
        <Left />
        <div class="main">
            <div class="top" :style="image">
                <div class="title">{{ $t('sustainability_header') }}</div>
            </div>
            <div class="content">
                <div class="sd-title">{{ sustainability.title }}</div>
                <div class="sd-content">{{ sustainability.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import sdImg from 'assets/bg-sd.jpg';
export default {
    name: 'sustainability',
    data() {
        return {
            sustainability: {},
            image: { backgroundImage: `url(${sdImg})` },
        };
    },
    async created() {
        try {
            const res = await this.$axios.get(`/sustainability`);
            this.sustainability = res.data;
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    },
};
</script>

<style scoped>
body {
    background: #fafafa;
    display: flex;
}

.body-bg {
    background-size: cover;
    background-position: center center;
    height: 100vh;
}

.hide {
    top: -100% !important;
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
    line-height: 60px;
    float: right;
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
    width: 30px;
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

.left.active ~ .main {
    width: calc(100% - 280px);
    left: 280px;
}

.main {
    position: absolute;
    height: 100%;
    width: calc(100% - 80px);
    left: 80px;
    transition: all 0.5s ease;
}

.main .content {
    text-align: center;
    margin-top: 300px;
    font-size: 50px;
}

.main .top {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}

.main .content {
    width: 96%;
    height: auto;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.main .content .item {
    width: 30%;
    height: 150px;
    background: #ccc;
    float: left;
    text-align: center;
    line-height: 150px;
    font-size: 20px;
    margin-bottom: 20px;
}
.main .content p {
    color: #000;
    text-decoration-line: none;
}

.main .top .title {
    font-size: 28px;
    margin-top: 50px;
    margin-left: 40px;
    color: #fff;
}
.main .top .maintitle {
    font-size: 18px;
    margin-top: 50px;
    margin-left: 40px;
    color: #fff;
}
.main .top .subtitle {
    font-size: 28px;
    margin-top: 10px;
    margin-left: 40px;
    color: #fff;
}

.main .content .inv-title {
    width: 100%;
    line-height: 60px;
    font-size: 24px;
    border-bottom: 2px solid #36225f;
    text-align: left;
}
.main .content .inv-item {
    width: 100%;
    line-height: 30px;
    margin-top: 30px;
    font-size: 20px;
    text-align: left;
}
.main .content .inv-item img {
    width: 20px;
    vertical-align: middle;
    margin-left: 30px;
}
.main .content .inv-item .icon-list {
    width: 20px;
    vertical-align: middle;
    margin-left: 0;
}

.main .content .sd-title {
    width: 100%;
    line-height: 60px;
    font-size: 24px;
    border-bottom: 2px solid #36225f;
    text-align: left;
}
.main .content .sd-content {
    width: 100%;
    line-height: 30px;
    margin-top: 30px;
    font-size: 16px;
    text-align: left;
}
</style>
