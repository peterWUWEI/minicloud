<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center">
                <material-card color="green" title="联系编辑" text="创建新的联系内容">
                    <v-form v-model="isFormValid" @submit.prevent="addNewContact">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="contact_title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="联系标题"
                                        required
                                    />
                                </v-col>

                                <v-col cols="12" class="editor">
                                    <div class="editor-label">内容</div>
                                    <v-divider />
                                    <editor v-model="contact_content"></editor>
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
    </v-app>
</template>

<script>
import Editor from '../../../components/helper/Editor';

export default {
    layout: 'adminLayout',
    components: { Editor },
    data() {
        return {
            contact_content: 'Please type in here',
            isFormValid: false,
            formRules: [(v) => !!v || 'The field is required'],
        };
    },
    methods: {
        async addNewContact() {
            const res = await this.$axios.post(`/contacts/create`, {
                title: this.contact_title,
                content: this.contact_content,
            });
            console.log(res.data);
            this.$router.push(`/admin/contacts`);
        },
    },
};
</script>
