<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('contact_header')}}</div>
            </div>

            <div class="content">
                <ContactContent v-for="item in contact_list" v-bind:key="item.id" :id="item.id" :title="item.title"/>
            </div>
	    </div>
    </div>
    
</template>

<script>
    export default {
        name: 'contacts',
        data() {
            return {
                contact_list: []
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`/contacts`);
                this.contact_list = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../images/bg-contact.jpg);
    }
</style>