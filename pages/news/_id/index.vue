<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">ニュース</div>
            </div>
            <div class="content">
                <div class="sd-title">{{ news.news_title }}</div>
                <div class="sd-content">{{ news.news_content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'news_page',
        data() {
            return {
                news: []
            }
        },
        async created() {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/news/get?id=${this.$route.params.id}`, config);
                this.news = res.data
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../../images/bg-news.jpg);
    }
</style>