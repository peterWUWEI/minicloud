<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
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
    import investImg from "assets/bg-investors.jpg";
    export default {
        name: 'investor_info_page',
        data() {
            return {
                invest_info: [],
                image: { backgroundImage: `url(${investImg})` }
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/investorinfo/get?id=${this.$route.params.id}`);
                this.invest_info = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>