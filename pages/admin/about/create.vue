<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center">
                <material-card color="green" title="关于编辑" text="创建新的关于内容">
                    <v-form v-model="isFormValid" @submit.prevent="addNewAbout">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="about_title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="关于标题"
                                        required
                                    />
                                </v-col>

                                <v-col cols="12" class="editor">
                                    <div class="editor-label">关于内容</div>
                                    <v-divider />
                                    <editor v-model="about_content"></editor>
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
            about_content: 'Please type in here',
            isFormValid: false,
            formRules: [(v) => !!v || 'The field is required'],
        };
    },
    methods: {
        async addNewAbout() {
            const res = await this.$axios.post(`/about/create`, {
                title: this.about_title,
                content: this.about_content,
            });
            console.log(res.data);
            this.$router.push(`/admin/about`);
        },
    },
};
</script>
