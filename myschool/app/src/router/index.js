import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        redirect: '/index/home',
        component: () =>
            import ('../views/Index.vue'),
        // redirect: '/index/home',
        children: [{
                path: '/index/home',
                name: "Home",
                component: () =>
                    import ('../views/index/Home.vue'),
                meta: {
                    keepAlive: true,
                    deepth: 1
                }
            },
            {
                path: '/index/classify',
                name: "Classify",
                component: () =>
                    import ('../views/index/Classify.vue'),
                meta: {
                    keepAlive: true,
                    deepth: 2
                }
            },
            {
                path: '/index/cart',
                name: "Cart",
                component: () =>
                    import ('../views/index/Cart.vue'),
                meta: {
                    keepAlive: true,
                    deepth: 3
                }
            },
            {
                path: '/index/my',
                name: "My",
                component: () =>
                    import ('../views/index/My.vue'),
                meta: {
                    keepAlive: true,
                    deepth: 4
                }
            },
            {
                path: '/home/search',
                name: "Search",
                component: () =>
                    import ('../views/index/Search.vue'),
                meta: {
                    keepAlive: true,
                    deepth: 5
                }
            },
            {
                path: '/index/dps',
                name: "Dps",
                component: () =>
                    import ('../views/index/Dps.vue'),
                meta: {
                    keepAlive: true,
                    deepth: 6
                }
            },
        ]
    },
    {
        path: '/login',
        name: '/login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/position',
        component: () =>
            import ('../views/Position.vue')
    },
    {
        path: '/detail/:id',
        component: () =>
            import ('../views/Detail.vue')
    },
    {
        path: '/homedetail/:pid',
        component: () =>
            import ('../views/Detail2.vue')
    },
    {
        path: '/register',
        component: () =>
            import ('../views/Registry')
    },
    {
        path: '/address',
        component: () =>
            import ('../views/Address')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let username = localStorage.getItem('username')
    if (to.path === '/index/my') {
        username ? next() : next('/login')
    }
    next()
})
export default router