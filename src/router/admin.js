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
                path: 'map',
                name: 'admin-map',
                component: () => import("../views/map/index.vue")
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
                path: 'category',
                name: 'admin-category',
                component: () => import("../views/category/index.vue")
            },
            {
                path: 'warehouse',
                name: 'admin-warehouse',
                component: () => import("../views/warehouse/index.vue")
            },
            {
                path: 'chart-evn',
                name: 'admin-chart-evn',
                component: () => import("../views/chart_env/index.vue")
            },
            {
                path: 'report',
                name: 'admin-report',
                component: () => import("../views/report/index.vue")
            }
        ]
    }
]
export default adminRouter
