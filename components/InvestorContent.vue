<template>
    <div>
        <p class="inv-item">
            <nuxt-link :to="'investorinfo/' + id">
                {{ pdf_title }}
            </nuxt-link>
        </p>
        <a class="inv-item" :href="`/` + pdf_file_url" download=""><img src="/icon-pdf.png" /></a>
    </div>
</template>

<script>
export default {
    name: 'InvestorContent',
    props: ['pdf_title', 'pdf_file_url', 'id'],
};
</script>

<style scoped>
.inv-title {
    width: 100%;
    line-height: 60px;
    font-size: 24px;
    border-bottom: 2px solid #36225f;
    text-align: left;
}
.inv-item {
    width: 100%;
    line-height: 30px;
    margin-top: 30px;
    font-size: 20px;
    text-align: left;
}
.inv-item img {
    width: 20px;
    vertical-align: middle;
    margin-left: 30px;
}
.inv-item .icon-list {
    width: 20px;
    vertical-align: middle;
    margin-left: 0;
}
</style>
