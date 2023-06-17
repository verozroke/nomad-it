import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { path: '/', name: 'Home', component: () => import('@views/Home/HomeView.vue')},
    { path: '/design', name: 'Design', component: () => import('@views/Design/DesignView.vue')},
    { path: '/smm', name: 'Smm', component: () => import('@views/Smm/SmmView.vue')},
    { path: '/development', name: 'Development', component: () => import('@views/Development/DevelopmentView.vue')},
    { path: '/team', name: 'Team', component: () => import('@views/Team/TeamView.vue')},
    { path: '/workshops', name: 'Workshops', component: () => import('@views/Workshops/WorkshopsView.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router