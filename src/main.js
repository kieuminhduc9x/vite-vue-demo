import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import Antd from 'ant-design-vue'
// import VueIcons from 'vue-icons'
// import SvgIcon from 'vue3-icon'

import 'ant-design-vue/dist/reset.css'
// import 'ant-design/icons-vue'

import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css//bootstrap-utilities.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas, fab, far);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.component("svg-icon", SvgIcon);
// app.use(VueIcons)
app.use(Antd)
app.use(router)
app.mount('#app')
