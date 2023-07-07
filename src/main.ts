import { createVuetify } from "vuetify/lib/framework.mjs";
import { createApp } from "vue";
import App from './App.vue'
import router from './router'
import * as directives from "vuetify/directives"
import {VMain, VAppBar, VApp, VBtn, VTab, VTabs, VRow, VCol, VIcon, VTable} from "vuetify/components"
import { aliases, mdi } from "vuetify/iconsets/mdi"
import axios from "axios"
import VueAxios from "vue-axios"
import { VDataTable } from "vuetify/labs/VDataTable"
import "vuetify/styles"
import "@mdi/font/css/materialdesignicons.css"
import "./style.css"

const vuetify = createVuetify({
    components: {
      VDataTable,
      VMain, VAppBar, VApp, VBtn, VTab, VTabs, VRow, VCol, VIcon, VTable
    },
    directives,
    theme:{
      defaultTheme: 'dark',
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
})

createApp(App).use(vuetify).use(router).use(VueAxios, axios).mount('#app')
