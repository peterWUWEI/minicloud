<template>
    <v-app>
        <section v-if="isAuthenticated">
            <h1>删除服务</h1>
            <v-divider></v-divider>
            <form @submit.prevent="deleteService()">
                <br />
                <material-notification class="mb-3" color="warning">
                    <strong>警告</strong>
                    - 删除之后数据将无法找回
                </material-notification>

                <v-btn type="submit" color="red darken-3" dark text>
                    删除
                    <v-icon dark right>mdi-delete</v-icon>
                </v-btn>
                <nuxt-link to="/admin/services">
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
    layout: 'adminLayout',
    components: { Warning },
    methods: {
        async deleteService() {
            const res = await this.$axios.delete(`services/${this.$route.params.id}`);
            console.log(res.data);
            this.$router.push(`/admin/services`);
        },
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>
