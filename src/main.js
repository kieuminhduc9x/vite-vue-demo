import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/reset.css'

import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css//bootstrap-utilities.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas, fab, far);
import 'bootstrap/dist/css/bootstrap.min.css';

import Camera from "simple-vue-camera";
// import Videojs from 'video.js'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('camera', Camera)
// app.component('video', Videojs)
app.use(Antd)
app.use(router)
app.mount('#app')
