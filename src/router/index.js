import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Wall from '@/pages/Wall/Wall'
import Biaobai from '@/pages/Wall/Biaobai'
import Jiaoyi from '@/pages/Wall/Jiaoyi'
import Xuyuan from '@/pages/Wall/Xuyuan'
import Friend from '@/pages/Friend/Friend'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Login/Register'
import Setting from '@/pages/Login/Setting'
import Info from '@/pages/Login/Info'


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
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/setting', component: Setting },
        { path: '/info', component: Info }

    ]
})

export default router