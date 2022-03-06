<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
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
    import axios from 'axios';

    export default {
        name: 'sustainability',
        data() {
            return {
                sustainability: {}
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
                const res = await axios.get('http://localhost:8080/api/v1/sustainability', config);
                this.sustainability = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../images/bg-sd.jpg);
    }
</style>