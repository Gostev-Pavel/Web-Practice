import { createRouter, createWebHistory} from 'vue-router'
import TableTab from '../components/TableTab.vue'
import Home from '../components/Home.vue'
  
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {path: '/', name: 'Home', component: Home},
      {path: '/table', name: 'TableTab', component: TableTab}
    ]
})
  
export default router