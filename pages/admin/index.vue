<template>
    <v-app>
        <div v-if="isAuthenticated"></div>
        <div v-else><warning /></div>
    </v-app>
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
