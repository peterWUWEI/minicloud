<template>
    <v-app>
        <v-container fill-height fluid grid-list-xl id="table-content">
            <v-row justify="center">
                <v-col cols="12">
                    <material-card color="green" title="新闻列表">
                        <v-data-table :headers="headers" :items="items" hide-default-footer>
                            <template v-slot:item="row">
                                <tr>
                                    <td>{{ row.item.id }}</td>
                                    <td>{{ row.item.news_title }}</td>
                                    <td>
                                        <div class="d-flex">
                                            <v-tooltip top content-class="top">
                                                <template v-slot:activator="{ attrs }">
                                                    <v-btn
                                                        class="v-btn--simple"
                                                        color="green"
                                                        icon
                                                        v-bind="attrs"
                                                        @click="editNews(row.item.id)"
                                                    >
                                                        <v-icon color="primary">mdi-pencil</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>编辑</span>
                                            </v-tooltip>

                                            <v-tooltip top content-class="top">
                                                <template v-slot:activator="{ attrs }">
                                                    <v-btn
                                                        class="v-btn--simple"
                                                        color="danger"
                                                        icon
                                                        v-bind="attrs"
                                                        @click="deleteNews(row.item.id)"
                                                    >
                                                        <v-icon color="error">mdi-close</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>删除</span>
                                            </v-tooltip>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </material-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    layout: 'adminLayout',
    data: () => ({
        drawer: null,
        headers: [
            {
                sortable: false,
                text: 'ID',
                value: 'id',
            },
            {
                sortable: false,
                text: '新闻标题',
                value: 'news_title',
            },
            {
                sortable: false,
                text: '操作',
                value: 'operations',
            },
        ],
        items: [],
    }),
    async created() {
        try {
            const res = await this.$axios.get(`/news`);
            this.items = res.data;
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        editNews(newsId) {
            this.$router.push(`/admin/news/edit/${newsId}`);
        },
        deleteNews(newsId) {
            this.$router.push(`/admin/news/delete/${newsId}`);
        },
    },
};
</script>

<style scoped>
/* #table-content {
    left: 250px;
    right: 30px;
} */
</style>
