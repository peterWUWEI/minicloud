<template>
    <v-app>
        <v-container fill-height fluid grid-list-xl id="table-content">
            <v-row justify="center">
                <v-col cols="12">
                    <material-card color="green" title="服务列表">
                        <v-data-table :headers="headers" :items="items" hide-default-footer />
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
                text: 'Name',
                value: 'name',
            },
            {
                sortable: false,
                text: 'Country',
                value: 'country',
            },
            {
                sortable: false,
                text: 'City',
                value: 'city',
            },
            {
                sortable: false,
                text: 'Salary',
                value: 'salary',
                align: 'right',
            },
        ],
        items: [
            {
                name: 'Dakota Rice',
                country: 'Niger',
                city: 'Oud-Tunrhout',
                salary: '$35,738',
            },
            {
                name: 'Minerva Hooper',
                country: 'Curaçao',
                city: 'Sinaai-Waas',
                salary: '$23,738',
            },
            {
                name: 'Sage Rodriguez',
                country: 'Netherlands',
                city: 'Overland Park',
                salary: '$56,142',
            },
            {
                name: 'Philip Chanley',
                country: 'Korea, South',
                city: 'Gloucester',
                salary: '$38,735',
            },
            {
                name: 'Doris Greene',
                country: 'Malawi',
                city: 'Feldkirchen in Kārnten',
                salary: '$63,542',
            },
            {
                name: 'Mason Porter',
                country: 'Chile',
                city: 'Gloucester',
                salary: '$78,615',
            },
        ],
    }),
};
</script>

<style scoped>
/* #table-content {
    left: 250px;
    right: 30px;
} */
</style>
