<template>
    <v-app>
        <v-container fill-height fluid>
            <v-row justify="center">
                <material-card color="green" title="投资信息编辑" text="创建新的投资信息内容">
                    <v-form v-model="isFormValid" @submit.prevent="addNewInvestorInfo">
                        <v-container class="py-0">
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="investorInfo_title"
                                        :rules="formRules"
                                        class="purple-input"
                                        label="投资信息标题"
                                        required
                                    />
                                </v-col>

                                <v-col cols="12" class="editor">
                                    <div class="editor-label">投资信息内容</div>
                                    <v-divider />
                                    <editor v-model="investorInfo_content"></editor>
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
            investorInfo_content: 'Please type in here',
            isFormValid: false,
            formRules: [(v) => !!v || 'The field is required'],
        };
    },
    methods: {
        async addNewInvestorInfo() {
            const res = await this.$axios.post(`/investorInfo/create`, {
                title: this.investorInfo_title,
                content: this.investorInfoe_content,
            });
            console.log(res.data);
            this.$router.push(`/admin/investorInfo`);
        },
    },
};
</script>
