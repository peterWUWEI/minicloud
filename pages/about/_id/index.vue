<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('about_header') }}</div>
            </div>
            <div class="content">
                <div class="sd-title">{{ about.title }}</div>
                <div class="sd-content">{{ about.content}}</div>
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
                about: {}
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
                const res = await axios.get(`http://localhost:8080/api/v1/about/get?id=${this.$route.params.id}`, config);
                this.about = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../../images/bg-about.jpg);
    }
</style>