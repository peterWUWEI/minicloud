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
    export default {
        name: 'about',
        data() {
            return {
                about: {}
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/about/get?id=${this.$route.params.id}`);
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