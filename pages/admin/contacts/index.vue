<template>
    <v-app>
        <v-container fill-height fluid grid-list-xl id="table-content" v-if="isAuthenticated">
            <v-row justify="center">
                <v-col cols="12">
                    <material-card color="green" title="联系列表">
                        <v-data-table :headers="headers" :items="items" hide-default-footer>
                            <template v-slot:item="row">
                                <tr>
                                    <td>{{ row.item.id }}</td>
                                    <td>{{ row.item.title }}</td>
                                    <td>
                                        <div class="d-flex">
                                            <v-tooltip top content-class="top">
                                                <template v-slot:activator="{ attrs }">
                                                    <v-btn
                                                        class="v-btn--simple"
                                                        color="green"
                                                        icon
                                                        v-bind="attrs"
                                                        @click="editContact(row.item.id)"
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
                                                        @click="deleteContact(row.item.id)"
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
        <v-container v-else>
            <warning />
        </v-container>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Warning from '@/components/Warning.vue';

export default {
    components: { Warning },
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
                text: '联系标题',
                value: 'contact_title',
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
            const res = await this.$axios.get(`/contacts`);
            this.items = res.data;
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        editContact(contactId) {
            this.$router.push(`/admin/contacts/edit/${contactId}`);
        },
        deleteContact(contactId) {
            this.$router.push(`/admin/contacts/delete/${contactId}`);
        },
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
};
</script>

<style scoped>
/* #table-content {
    left: 250px;
    right: 30px;
} */
</style>
