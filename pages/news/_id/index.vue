<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
                <div class="title">{{ $t('news_header') }}</div>
            </div>
            <div class="content">
                <div class="sd-title">{{ news.news_title }}</div>
                <div class="sd-content">{{ news.news_content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import newsImg from "assets/bg-news.jpg";
    export default {
        name: 'news_page',
        data() {
            return {
                news: [],
                image: { backgroundImage: `url(${newsImg})` }
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/news/get?id=${this.$route.params.id}`);
                this.news = res.data
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>