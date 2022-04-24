<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center">
                <material-card color="green" title="关于编辑" text="更改关于内容">
                    <v-form v-model="isFormValid" @submit.prevent="updateAbout">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field v-model="about_id" label="ID (disabled)" disabled filled />
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="about_title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="关于标题"
                                        filled
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
            about_id: 0,
            about_title: '',
            about_content: '',
        };
    },
    async mounted() {
        try {
            const res = await this.$axios.get(`/about/${this.$route.params.id}`);
            console.log(res);
            this.about_id = res.data.id;
            this.about_title = res.data.title;
            this.about_content = res.data.content;
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        async updateAbout() {
            const res = await this.$axios.put(`/about/${this.$route.params.id}`, {
                title: this.about_title,
                content: this.about_content,
            });
            console.log(res.data);
            this.$router.push(`/admin/about`);
        },
    },
};
</script>
