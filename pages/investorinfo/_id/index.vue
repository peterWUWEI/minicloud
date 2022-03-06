<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('investor_info_header') }}</div>
            </div>
            <div class="content">
                <div class="sd-title">{{ invest_info.pdf_title }}</div>
                <div class="sd-title">{{ invest_info.content }}</div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'investor_info_page',
        data() {
            return {
                invest_info: []
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
                const res = await axios.get(`http://localhost:8080/api/v1/investorinfo/get?id=${this.$route.params.id}`, config);
                this.invest_info = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../../images/bg-investors.jpg);
    }
</style>