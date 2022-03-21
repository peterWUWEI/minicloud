<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
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
    import serviceImg from "assets/bg-services.jpg";
    export default {
        name: 'services_page',
        data() {
            return {
                service: [],
                image: { backgroundImage: `url(${serviceImg})` }
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/services/get?id=${this.$route.params.id}`);
                this.service = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>