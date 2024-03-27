<template>
  <a-layout-sider
      v-model:collapsed="collapsed" class="sider--top"
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
        <home-outlined/>
        <span>
          <router-link :to="{name: 'admin-dashboard'}">
            Trang chủ
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="2">
        <desktop-outlined/>
        <span>
          <router-link :to="{name: 'admin-users'}">
          Khách hàng
          </router-link>
        </span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
            <span>
              <user-outlined/>
              <span>Quản lý tài khoản</span>
            </span>
        </template>
        <a-menu-item key="3">
          <router-link :to="{name: 'admin-users'}">
            Tài khoản
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">Vai trò</a-menu-item>
        <a-menu-item key="5">Phân quyền</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
            <span>
              <file-outlined/>
              <span>
                Bài viết
              </span>
            </span>
        </template>
        <a-menu-item key="6">Danh mục</a-menu-item>
        <a-menu-item key="8">
          <router-link :to="{name: 'admin-post'}">
            Bài viết
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined/>
        <span>
          <router-link :to="{name: 'admin-warehouse'}">
            Kho hàng
          </router-link>
        </span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import {defineComponent, ref} from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  HomeOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    HomeOutlined
  },
  data() {
    return {
      selectedKeys: ref(['1']),
    }
  },
  props: {
    collapsed: Boolean
  },
  methods: {
    showSidebar() {
      if (this.collapsed === true) {
        document.getElementsByClassName('sider--top')[0].style.width = '50px'
      } else {
        document.getElementsByClassName('sider--top')[0].style.width = '270px'
      }
    }
  }
});
</script>
