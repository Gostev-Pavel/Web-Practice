<template>
    <v-main>
        <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="objects"
            :options.sync="options"
            :loading="loading"
            class="elevation-1"
        >
        </v-data-table>
    </v-main>
    </template>
    
    
    <script lang="ts">
    import axios from 'axios';
    
    interface Object{
        userId: number,
        id: number,
        title: string,
        body: string
    }
    
    export default{
        data: () => {
            return {
                loading: true,
                objects: [] as Object[],
                itemsPerPage: 5,
                options: {},
                headers: [
                    { title: 'ID пользователя', align: 'start',sortable: true, key: 'userId' },
                    { title: 'ID', align: 'start',sortable: true, key: 'id' },
                    { title: 'Название', align: 'start', key: 'title' },
                    { title: 'Содержимое', align: 'start', key: 'body' }
                ],
            };
        },
    
        beforeMount: async function () {
            await this.fetch
        },
    
        methods: {
            fetch: async function () {
                this.loading = true;
    
                const { data } = await axios.get<Object[]>('https://jsonplaceholder.typicode.com/posts');
                this.objects = data;
    
                this.loading = false;
            }
        },

        mounted() {
            this.fetch();
        },
    };
    </script>