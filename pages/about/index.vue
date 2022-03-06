<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('about_header') }}</div>
            </div>
            <div class="content">
                <AboutContent v-for="item in about_list" v-bind:key="item.id" :id="item.id" :title="item.title"/>
            </div>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'about',
        data() {
            return {
                about_list: []
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
                const res = await axios.get('http://localhost:8080/api/v1/about', config);
                this.about_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../images/bg-about.jpg);
    }
</style>