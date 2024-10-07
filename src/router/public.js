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
            },
            {
                path: 'register',
                name: 'register',
                component: () => import("../views/system/register.vue")
            },
            {
                path: 'forgot-password',
                name: 'forgotPassword',
                component: () => import("../views/system/forgotPassword.vue")
            }
        ]
    }
]
export default publicRouter
