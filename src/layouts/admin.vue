<template>
  <a-layout style="min-height: 100vh">
    <sider-bar :collapsed.sync="collapsed"></sider-bar>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" >
        <Header :collapsed.sync="collapsed" @collapsedChanged="collapsedChanged"></Header>
      </a-layout-header>
      <a-layout-content slot="content" style="padding: 5px 15px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">

      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import Header from "../components/Header.vue";
import SiderBar from "../components/SiderBar.vue";
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    Header,
    SiderBar
  },
  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
  methods: {
    collapsedChanged(newValue) {
      this.collapsed = newValue
    }
  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>


<!--<template>-->
<!--  <a-layout>-->
<!--      <SiderBar></SiderBar>-->
<!--    <a-layout>-->
<!--      <a-layout-header>-->
<!--        <Header></Header>-->
<!--      </a-layout-header>-->
<!--      <a-layout-content>-->
<!--        <a-layout style="padding: 0 24px 24px">-->
<!--          <a-breadcrumb style="margin: 16px 0">-->
<!--            <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--            <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--            <a-breadcrumb-item>App</a-breadcrumb-item>-->
<!--          </a-breadcrumb>-->
<!--          <a-layout-content-->
<!--              :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '735px' }"-->
<!--          >-->
<!--            Content-->
<!--          </a-layout-content>-->
<!--        </a-layout>-->
<!--      </a-layout-content>-->
<!--      <a-layout-footer style="text-align: center; padding-bottom:16px">Copyright ©2023. All rights reserved.-->
<!--      </a-layout-footer>-->
<!--    </a-layout>-->
<!--  </a-layout>-->
<!--</template>-->
<!--<script>-->
<!--import Header from "../components/Header.vue";-->
<!--import SiderBar from '../components/SiderBar.vue'-->

<!--import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons-vue';-->
<!--import {defineComponent, ref} from 'vue';-->

<!--export default defineComponent({-->
<!--  components: {-->
<!--    UserOutlined,-->
<!--    LaptopOutlined,-->
<!--    NotificationOutlined,-->
<!--    Header,-->
<!--    SiderBar-->
<!--  },-->
<!--  setup() {-->
<!--    return {-->
<!--      selectedKeys1: ref(['2']),-->
<!--      selectedKeys2: ref(['1']),-->
<!--      collapsed: ref(false),-->
<!--      openKeys: ref(['sub1']),-->
<!--    };-->
<!--  },-->
<!--});-->
<!--</script>-->
<!--<style>-->
<!--#components-layout-demo-top-side-2 .logo {-->
<!--  float: left;-->
<!--  width: 120px;-->
<!--  height: 31px;-->
<!--  margin: 16px 24px 16px 0;-->
<!--  background: rgba(255, 255, 255, 0.3);-->
<!--}-->

<!--.header{-->
<!--  background-color: white!important;-->
<!--  border-bottom: 1px solid green;-->
<!--}-->

<!--.ant-row-rtl #components-layout-demo-top-side-2 .logo {-->
<!--  float: right;-->
<!--  margin: 16px 0 16px 24px;-->
<!--}-->

<!--.site-layout-background {-->
<!--  background: #fff;-->
<!--}-->
<!--</style>-->
