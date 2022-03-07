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
    export default {
        name: 'services_page',
        data() {
            return {
                service: []
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/api/services/get?id=${this.$route.params.id}`);
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