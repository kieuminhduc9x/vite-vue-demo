const publicRouter = [
    {
        path: '/',
        component: () => import('../layouts/public.vue'),
        children: [
            {
                path: '',
                redirect: 'login' // Chuyển hướng từ `/` tới `/login`
            },
            {
                path: 'login',
                name: 'login',
                component: () => import("../views/system/login.vue")
            }
        ]
    }
]
export default publicRouter
