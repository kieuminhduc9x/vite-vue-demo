const adminRouter = [
    {
        path: '/admin',
        component: () => import('../layouts/admin.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: () => import("../views/dashboard/index.vue")
            },
            {
                path: 'users',
                name: 'admin-users',
                component: () => import("../views/users/index.vue")
            },
            {
                path: 'role',
                name: 'admin-role',
                component: () => import("../views/role/index.vue")
            },
            {
                path: 'permission',
                name: 'admin-permission',
                component: () => import("../views/permission/index.vue")
            },
            {
                path: 'customer',
                name: 'admin-customer',
                component: () => import("../views/customer/index.vue")
            },
            {
                path: 'post',
                name: 'admin-post',
                component: () => import("../views/post/index.vue")
            },
            {
                path: 'caterogy',
                name: 'admin-caterogy',
                component: () => import("../views/caterogy/index.vue")
            },
            {
                path: 'warehouse',
                name: 'admin-warehouse',
                component: () => import("../views/warehouse/index.vue")
            }
        ]
    }
]
export default adminRouter
