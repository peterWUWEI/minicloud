<template>
    <v-container fluid>
        <div class="px-3">
            <material-notification class="mb-3" color="warning" dismissible>
                <strong>警告 - 您需要使用管理员账号登录来使用管理员功能</strong>
            </material-notification>
        </div>

        <v-divider />

        <v-row justify="center">
            <v-col cols="12" sm="4">
                <v-btn block color="success" to="/admin/login">管理员登录</v-btn>
            </v-col>

            <v-col cols="12" sm="4">
                <v-btn block color="success" to="/">返回游客主页</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Warning',
};
</script>
