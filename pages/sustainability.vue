<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
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
    import sdImg from "assets/bg-sd.jpg";
    export default {
        name: 'sustainability',
        data() {
            return {
                sustainability: {},
                image: { backgroundImage: `url(${sdImg})` }
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