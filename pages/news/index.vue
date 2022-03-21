<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
                <div class="title">{{ $t('news_header') }}</div>
            </div>
            <div class="content">
                <NewsContent v-for="item in news_list" v-bind:key="item.id" :id="item.id" :news_title="item.news_title" :news_date="item.news_date"/>
            </div>
        </div>
    </div>
</template>

<script>
    import newsImg from "assets/bg-news.jpg";
    import NewsContent from '../../components/NewsContent';

    export default {
        name: 'news',
        components: {
            NewsContent
        },
        data() {
            return {
                news_list: [],
                image: { backgroundImage: `url(${newsImg})` }
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/news`);
                this.news_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>