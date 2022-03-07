<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top">
                <div class="title">{{ $t('contact_header')}}</div>
            </div>

            <div class="content">
                <div class="sd-title">{{ contact.title }}</div>
                <div class="sd-content">{{ contact.content}}</div>
            </div>
	    </div>
    </div>
    
</template>

<script>
    export default {
        name: 'contacts',
        data() {
            return {
                contact: {}
            }
        },
        async created() {
            try {
                const res = await this.$axios.get(`${this.$axios.defaults.baseURL}contacts/get?id=${this.$route.params.id}`);
                this.contact = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>

<style scoped>
    .main .top {
        background-image: url(../../../images/bg-contact.jpg);
    }
</style>