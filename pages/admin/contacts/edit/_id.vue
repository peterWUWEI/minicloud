<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center">
                <material-card color="green" title="联系编辑" text="更改联系内容">
                    <v-form v-model="isFormValid" @submit.prevent="updateContact">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field v-model="contact_id" label="ID (disabled)" disabled filled />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="contact_title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="联系标题"
                                        filled
                                        required
                                    />
                                </v-col>

                                <v-col cols="12" class="editor">
                                    <div class="editor-label">联系内容</div>
                                    <v-divider />
                                    <editor v-model="contact_content"></editor>
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
    </v-app>
</template>

<script>
import Editor from '../../../../components/helper/Editor';

export default {
    layout: 'adminLayout',
    components: { Editor },
    data() {
        return {
            isFormValid: false,
            formRules: [(v) => !!v || 'The field is required'],
            contact_id: 0,
            contact_title: '',
            contact_content: '',
        };
    },
    async mounted() {
        try {
            const res = await this.$axios.get(`/contacts/${this.$route.params.id}`);
            console.log(res);
            this.contact_id = res.data.id;
            this.contact_title = res.data.title;
            this.contact_content = res.data.content;
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        async updateContact() {
            const res = await this.$axios.put(`/contacts/${this.$route.params.id}`, {
                title: this.contact_title,
                content: this.contact_content,
            });
            console.log(res.data);
            this.$router.push(`/admin/contacts`);
        },
    },
};
</script>
