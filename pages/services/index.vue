<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">私達のサービス</div>
            </div>
            <div class="content">
                <ServiceContent v-for="item in service_list" v-bind:key="item.id" :id="item.id" :service_title="item.service_title"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ServiceContent from '../../components/ServiceContent';

    export default {
        name: 'services',
        components: {
            ServiceContent
        },
        data() {
            return {
                service_list: []
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
                const res = await axios.get('http://localhost:8080/api/v1/services', config);
                this.service_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../images/bg-services.jpg);
    }
</style>