<template>
    <div>
        <Left/>
        <div class="main">
            <div class="top" :style="image">
                <div class="title">{{ $t('contact_header')}}</div>
            </div>

            <div class="content">
                <ContactContent v-for="item in contact_list" v-bind:key="item.id" :id="item.id" :title="item.title"/>
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
                contact_list: [],
                image: { backgroundImage: `url(${contactImg})` }
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