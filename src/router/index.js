import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Wall from '@/pages/Wall/Wall'
import Biaobai from '@/pages/Wall/Biaobai'
import Jiaoyi from '@/pages/Wall/Jiaoyi'
import Xuyuan from '@/pages/Wall/Xuyuan'
import Friend from '@/pages/Friend/Friend'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        {
            path: '/wall', component: Wall,
            children: [
                { path: '/biaobai', component: Biaobai },
                { path: '/jiaoyi', component: Jiaoyi },
                { path: '/xuyuan', component: Xuyuan }
            ]
        },
        { path: '/friend', component: Friend },
    ]
})

export default router