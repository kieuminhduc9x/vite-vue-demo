<template>
  <a-layout style="min-height: 100vh">
    <SiderBar :collapsed.sync="collapsed"></SiderBar>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" >
        <Header :collapsed.sync="collapsed" @collapsedChanged="collapsedChanged"></Header>
      </a-layout-header>
      <a-layout-content slot="content">
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
