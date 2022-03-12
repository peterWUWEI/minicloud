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
    export default {
        name: 'sustainability',
        data() {
            return {
                sustainability: {}
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/sustainability`);
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
        background-image: url("/images/bg-sd.jpg");
    }
</style>