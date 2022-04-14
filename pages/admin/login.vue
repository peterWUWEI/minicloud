<template>
    <v-app>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-4 is-offset-4">
                        <h2 class="title has-text-centered">管理员登录</h2>

                        <Notification :message="error" v-if="error" />

                        <form method="post" @submit.prevent="login">
                            <div class="field">
                                <label class="label">用户名</label>
                                <div class="control">
                                    <input class="input" name="username" v-model="username" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">密码</label>
                                <div class="control">
                                    <input type="password" class="input" name="password" v-model="password" />
                                </div>
                            </div>
                            <div class="control">
                                <button type="submit" class="button is-dark is-fullwidth">登录</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </v-app>
</template>

<script>
import Notification from '@/components/Notification';

export default {
    layout: 'adminLayout',
    components: {
        Notification,
    },

    data() {
        return {
            username: '',
            password: '',
            error: null,
        };
    },

    methods: {
        async login() {
            try {
                await this.$auth.loginWith('local', {
                    data: {
                        username: this.username,
                        password: this.password,
                    },
                });

                this.$router.push('/admin');
            } catch (e) {
                this.error = e.response.data.error;
            }
        },
    },
};
</script>
