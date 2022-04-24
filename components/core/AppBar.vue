<template>
    <v-app-bar id="core-app-bar" absolute app color="transparent" flat height="88">
        <v-spacer />

        <v-toolbar-items>
            <v-row align="center" class="mx-0">
                <v-btn icon @click="onClick">
                    <v-icon color="tertiary">mdi-repeat</v-icon>
                </v-btn>

                <v-btn icon to="/admin">
                    <v-icon color="tertiary">mdi-view-dashboard</v-icon>
                </v-btn>

                <v-btn icon v-if="isAuthenticated" @click="logout">
                    <v-icon color="tertiary">mdi-logout</v-icon>
                </v-btn>

                <v-btn to="/admin/login" icon v-else>
                    <v-icon color="tertiary">mdi-account</v-icon>
                </v-btn>
            </v-row>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
// Utilities
import { mapMutations, mapGetters } from 'vuex';

export default {
    mounted() {
        this.onResponsiveInverted();
        window.addEventListener('resize', this.onResponsiveInverted);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResponsiveInverted);
    },

    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
        onClick() {
            this.setDrawer(!this.$store.state.app.drawer);
        },
        onResponsiveInverted() {
            if (window.innerWidth < 991) {
                this.responsive = true;
            } else {
                this.responsive = false;
            }
        },
        async logout() {
            await this.$auth.logout();
        },
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>

<style>
/* Fix coming in v2.0.8 */
#core-app-bar {
    width: auto;
}

#core-app-bar a {
    text-decoration: none;
}
</style>
