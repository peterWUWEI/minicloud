<template>
    <v-app>
        <section v-if="isAuthenticated">
            <h1>删除联系</h1>
            <v-divider></v-divider>
            <form @submit.prevent="deleteContact()">
                <br />
                <material-notification class="mb-3" color="warning">
                    <strong>警告</strong>
                    - 删除之后数据将无法找回
                </material-notification>

                <v-btn type="submit" color="red darken-3" dark text>
                    删除
                    <v-icon dark right>mdi-delete</v-icon>
                </v-btn>
                <nuxt-link to="/admin/contacts">
                    <v-btn color="blue darken-3" text>
                        取消
                        <v-icon dark right>mdi-cancel</v-icon>
                    </v-btn>
                </nuxt-link>
            </form>
        </section>
        <section v-else><warning /></section>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Warning from '@/components/Warning.vue';

export default {
    components: { Warning },
    layout: 'adminLayout',
    methods: {
        async deleteContact() {
            const res = await this.$axios.delete(`contacts/${this.$route.params.id}`);
            console.log(res.data);
            this.$router.push(`/admin/contacts`);
        },
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>
