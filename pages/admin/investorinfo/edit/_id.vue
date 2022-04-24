<template>
    <v-app>
        <v-container fill-height fluid v-if="isAuthenticated">
            <v-row justify="center">
                <material-card color="green" title="投资信息编辑" text="更改投资信息内容">
                    <v-form v-model="isFormValid" @submit.prevent="updateInvestorInfo">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field v-model="id" label="ID (disabled)" disabled filled />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="投资信息标题"
                                        filled
                                        required
                                    />
                                </v-col>

                                <v-col cols="12" class="editor">
                                    <div class="editor-label">投资信息内容</div>
                                    <v-divider />
                                    <client-only>
                                        <vue-editor v-model="content"></vue-editor>
                                    </client-only>
                                </v-col>

                                <p v-if="!isFormValid" style="color: red; font-style: italic">
                                    请填写所有必须填写的内容
                                </p>

                                <v-col cols="12" class="text-right">
                                    <v-btn color="success" type="submit" :disabled="!isFormValid">保存</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </material-card>
            </v-row>
        </v-container>
        <v-container v-else><warning /></v-container>
    </v-app>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
import Warning from '@/components/Warning.vue';

export default {
    layout: 'adminLayout',
    components: { VueEditor, Warning },
    data() {
        return {
            isFormValid: false,
            formRules: [(v) => !!v || '该内容必须填写'],
            id: 0,
            title: '',
            content: '',
        };
    },
    async mounted() {
        try {
            const res = await this.$axios.get(`/investorInfo/${this.$route.params.id}`);
            console.log(res);
            this.id = res.data.id;
            this.title = res.data.title;
            this.content = res.data.content;
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        async updateInvestorInfo() {
            const res = await this.$axios.put(`/investorInfo/${this.$route.params.id}`, {
                title: this.title,
                content: this.content,
            });
            console.log(res.data);
            this.$router.push(`/admin/investorInfo`);
        },
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>
