<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
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
    import contactImg from "assets/bg-contact.jpg";
    export default {
        name: 'contacts',
        data() {
            return {
                contact: {},
                image: { backgroundImage: `url(${contactImg})` }
            };
        },
        async created() {
            try {
                const res = await this.$axios.get(`/contacts/get?id=${this.$route.params.id}`);
                this.contact = res.data
                console.log(res.data)
            } catch (err) {
                console.error(err);
            }
        }
    }
</script>