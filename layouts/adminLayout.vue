<template>
    <v-app>
        <core-app-bar />
        <core-drawer />
        <core-view />
        <core-footer />
    </v-app>
</template>

<script>
import Drawer from '@/components/core/Drawer';
import Footer from '@/components/core/Footer';
import AppBar from '@/components/core/AppBar';
import View from '@/components/core/View';

export default {
    head() {
        return {
            title: '后台管理系统-MiniCloud',
            meta: [
                {
                    content: 'width=device-width,initial-scale=1.0',
                    charset: 'utf-8',
                },
            ],
        };
    },
    props: {
        source: String,
    },
    data: () => ({
        drawer: null,
    }),
    components: {
        CoreDrawer: Drawer,
        CoreFooter: Footer,
        CoreAppBar: AppBar,
        CoreView: View,
    },
};
</script>
