<template>
    <v-app>
        <section>
            <h1>删除投资信息</h1>
            <v-divider></v-divider>
            <form @submit.prevent="deleteInvestorInfo()">
                <br />
                <material-notification class="mb-3" color="warning">
                    <strong>警告</strong>
                    - 删除之后数据将无法找回
                </material-notification>

                <v-btn type="submit" color="red darken-3" dark text>
                    Delete
                    <v-icon dark right>mdi-delete</v-icon>
                </v-btn>
                <nuxt-link to="/admin/investorInfo">
                    <v-btn color="blue darken-3" text>
                        Cancel
                        <v-icon dark right>mdi-cancel</v-icon>
                    </v-btn>
                </nuxt-link>
            </form>
        </section>
    </v-app>
</template>

<script>
export default {
    layout: 'adminLayout',
    methods: {
        async deleteInvestorInfo() {
            const res = await this.$axios.delete(`investorInfo/${this.$route.params.id}`);
            console.log(res.data);
            this.$router.push(`/admin/investorInfo`);
        },
    },
};
</script>
