import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/index.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import * as Icons from '@ant-design/icons-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas, fab, far);

import Camera from "simple-vue-camera";
// import Videojs from 'video.js'
// import { LMap, LTileLayer, LMarker } from 'vue-leaflet';
// import 'leaflet/dist/leaflet.css';
//
// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Đăng ký các thành phần cần thiết
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement, // Đăng ký PointElement cho các biểu đồ đường hoặc điểm
    LineElement,  // Đăng ký LineElement cho biểu đồ đường
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const app = createApp(App)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key]);
});

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('camera', Camera)
// app.component('video', Videojs)
app.use(Antd)
app.use(router)
app.mount('#app')
