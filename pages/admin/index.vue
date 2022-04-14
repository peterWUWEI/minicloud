<template>
    <v-app><warning /></v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Warning from '../../components/Warning.vue';

export default {
    components: { Warning },
    layout: 'adminLayout',
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>
