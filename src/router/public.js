const publicRouter = [
    {
        path: '/',
        component: () => import('../layouts/public.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import("../views/system/login.vue")
            }
        ]
    }
]
export default publicRouter
