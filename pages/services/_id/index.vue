<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('service_header') }}</div>
            </div>
            <div class="content">
                <div class="sd-title">{{ service.service_title }}</div>
                <div class="sd-content">{{ service.service_content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'services_page',
        data() {
            return {
                service: []
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
                const res = await axios.get(`http://localhost:8080/api/v1/services/get?id=${this.$route.params.id}`, config);
                this.service = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../../images/bg-services.jpg);
    }
</style>