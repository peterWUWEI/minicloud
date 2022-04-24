<template>
    <v-app>
        <v-container fill-height fluid v-if="isAuthenticated">
            <v-row justify="center">
                <material-card color="green" title="服务编辑" text="创建新的服务内容">
                    <v-form v-model="isFormValid" @submit.prevent="addNewService">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="service_title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="服务标题"
                                        required
                                    />
                                </v-col>

                                <v-col cols="12" class="editor">
                                    <div class="editor-label">服务内容</div>
                                    <v-divider />
                                    <client-only>
                                        <vue-editor v-model="content"></vue-editor>
                                    </client-only>
                                </v-col>

                                <p v-if="!isFormValid" style="color: red; font-style: italic">
                                    请填写所有必须填写的内容
                                </p>

                                <v-col cols="12" class="text-right">
                                    <v-btn color="success" type="submit" :disabled="!isFormValid">提交</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </material-card>
            </v-row>
        </v-container>
        <v-container v-else>
            <warning />
        </v-container>
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
            content: '',
            isFormValid: false,
            formRules: [(v) => !!v || '该内容必须填写'],
        };
    },
    methods: {
        async addNewService() {
            const res = await this.$axios.post(`/services/create`, {
                service_title: this.service_title,
                service_content: this.content,
            });
            console.log(res.data);
            this.$router.push(`/admin/services`);
        },
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>
