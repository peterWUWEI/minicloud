<template>
    <v-app>
        <div v-if="isAuthenticated"><h1>欢迎回来</h1></div>
        <div v-else><warning /></div>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Warning from '@/components/Warning.vue';

export default {
    components: { Warning },
    layout: 'adminLayout',
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>
