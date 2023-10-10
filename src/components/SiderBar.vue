<template>
  <a-layout-sider
      v-model:collapsed="collapsed"  class="sider--top"
      collapsedWidth="50"
      collapsible
      style="max-width: 300px !important; padding-top: 5px"
      width="270"
      @collapse="showSidebar">
    <div class="logo">
      <img
          v-if="collapsed === true"
          alt="ATIS"
          src="../assets/logo_mini.jpg"
          style="width: 28px; margin: 10px 12px; height: 25px">
      <img v-else alt="ATIS" src="../assets/logo.png" style="width: 90px; margin: 10px 90px; height: 30px">
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <pie-chart-outlined />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <desktop-outlined />
        <span>Option 2</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
        </template>
        <a-menu-item key="3">Tom</a-menu-item>
        <a-menu-item key="4">Bill</a-menu-item>
        <a-menu-item key="5">Alex</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
        </template>
        <a-menu-item key="6">Team 1</a-menu-item>
        <a-menu-item key="8">Team 2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import {defineComponent, ref} from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  data () {
    return {
      selectedKeys: ref(['1']),
    }
  },
  props: {
    collapsed: Boolean
  },
  methods: {
    showSidebar(){
      if (this.collapsed === true) {
        document.getElementsByClassName('sider--top')[0].style.width = '50px'
      } else {
        document.getElementsByClassName('sider--top')[0].style.width = '270px'
      }
    }
  }
});
</script>
