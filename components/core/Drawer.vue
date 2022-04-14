<template>
    <v-navigation-drawer
        id="app-drawer"
        v-model="inputValue"
        :src="image"
        app
        color="grey darken-2"
        dark
        floating
        mobile-breakpoint="991"
        persistent
        width="260"
    >
        <template v-slot:img="attrs">
            <v-img v-bind="attrs" gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)" />
        </template>

        <v-list-item two-line>
            <v-list-item-avatar color="white">
                <v-img src="/logo.png" height="44" contain />
            </v-list-item-avatar>

            <v-list-item-title class="title" id="bar-title">Minicloud Admin</v-list-item-title>
        </v-list-item>

        <v-divider class="mx-3 mb-3" />

        <v-list nav>
            <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
            <div />

            <v-list-group v-for="(link, i) in links" :key="i">
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item v-for="(child, j) in link.child" :key="j" :to="child.link">
                    <v-list-item-title>{{ child.subtitle }}</v-list-item-title>
                    <v-list-item-icon>
                        <v-icon>{{ child.icon }}</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from 'vuex';

export default {
    props: {
        opened: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        links: [
            {
                title: '服务管理',
                child: [
                    {
                        subtitle: '服务列表',
                        icon: 'mdi-table',
                        link: '/admin/service-list',
                    },
                    {
                        subtitle: '添加新服务',
                        icon: 'mdi-playlist-plus',
                        link: '/admin/add-service',
                    },
                ],
            },
            {
                title: '新闻管理',
                child: [
                    {
                        subtitle: '新闻列表',
                        icon: 'mdi-table',
                        link: '#',
                    },
                    {
                        subtitle: '添加新闻',
                        icon: 'mdi-playlist-plus',
                        link: '#',
                    },
                ],
            },
            {
                title: '企业情报',
                child: [
                    {
                        subtitle: '情报列表',
                        icon: 'mdi-table',
                        link: '#',
                    },
                    {
                        subtitle: '添加情报',
                        icon: 'mdi-playlist-plus',
                        link: '#',
                    },
                ],
            },
            {
                title: '投资家情报',
                child: [
                    {
                        subtitle: '公告列表',
                        icon: 'mdi-table',
                        link: '#',
                    },
                    {
                        subtitle: '添加公告',
                        icon: 'mdi-playlist-plus',
                        link: '#',
                    },
                ],
            },
            {
                title: '可持续发展',
                child: [
                    {
                        subtitle: '可持续发展',
                        icon: 'mdi-table',
                        link: '#',
                    },
                ],
            },
            {
                title: '地址联系',
                child: [
                    {
                        subtitle: '联系列表',
                        icon: 'mdi-table',
                        link: '#',
                    },
                    {
                        subtitle: '添加联系方式',
                        icon: 'mdi-playlist-plus',
                        link: '#',
                    },
                ],
            },
            {
                title: '系统设置',
                child: [
                    {
                        subtitle: '图片管理',
                        icon: 'mdi-table',
                        link: '#',
                    },
                ],
            },
        ],
    }),

    computed: {
        ...mapState('app', ['image', 'color']),
        inputValue: {
            get() {
                return this.$store.state.app.drawer;
            },
            set(val) {
                this.setDrawer(val);
            },
        },
    },

    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    },
};
</script>

<style scoped>
#bar-title {
    color: white;
}
</style>
