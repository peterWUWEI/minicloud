<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('news_header') }}</div>
            </div>
            <div class="content">
                <NewsContent v-for="item in news_list" v-bind:key="item.id" :id="item.id" :news_title="item.news_title" :news_date="item.news_date"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import NewsContent from '../../components/NewsContent';

    export default {
        name: 'news',
        components: {
            NewsContent
        },
        data() {
            return {
                news_list: []
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
                const res = await axios.get('http://localhost:8080/api/v1/news', config);
                this.news_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../images/bg-news.jpg);
    }
</style>