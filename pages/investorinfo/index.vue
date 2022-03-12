<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('investor_info_header') }}</div>
            </div>
            <div class="content">
                <div class="inv-title">電⼦公告</div>
                <InvestorContent v-for="item in investor_list" v-bind:key="item.id" :id="item.id" :pdf_title="item.pdf_title" :pdf_file_url="item.pdf_file_url"/>
            </div>
        </div>
    </div>
    
</template>

<script>
    import InvestorContent from '../../components/InvestorContent';

    export default {
        name: 'investorinfo',   
        components: {
            InvestorContent
        },
        data() {
            return {
                investor_list: []
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/investorinfo`);
                this.investor_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url("/images/bg-investors.jpg");
    }
</style>