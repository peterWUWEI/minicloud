<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
                <div class="title">{{ $t('service_header') }}</div>
            </div>
            <div class="content">
                <ServiceContent v-for="item in service_list" v-bind:key="item.id" :id="item.id" :service_title="item.service_title"/>
            </div>
        </div>
    </div>
</template>

<script>
    import serviceImg from "assets/bg-services.jpg";
    import ServiceContent from '../../components/ServiceContent';

    export default {
        name: 'services',
        components: {
            ServiceContent
        },
        data() {
            return {
                service_list: [],
                image: { backgroundImage: `url(${serviceImg})` }
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/services`);
                this.service_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>