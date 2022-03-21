<template>
    <div>
        <p class="inv-item">
            <nuxt-link :to="'investorinfo/' + id">
                {{ pdf_title }}
            </nuxt-link>
        </p>
        <a class="inv-item" :href="`/` + pdf_file_url" download=""><img src="/icon-pdf.png" /> </a>
    </div>
    
</template>

<script>
    export default({
        name: 'InvestorContent',
        props: ['pdf_title', 'pdf_file_url', 'id']
    })
</script>