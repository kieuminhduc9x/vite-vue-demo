<template>
  <a-layout-sider
      ref="sider"
      collapsible
      :collapsed="collapsed"
      collapsedWidth="50"
      style="max-width: 300px !important; padding-top: 5px"
      width="270"
      @collapse="handleCollapse">
    <div class="logo">
<!--      <img-->
<!--          v-if="collapsed === true"-->
<!--          alt="ATIS"-->
<!--          src="../assets/logo_mini.jpg"-->
<!--          style="width: 28px; margin: 10px 12px; height: 25px">-->
<!--      <img v-else alt="ATIS" src="../assets/logo.png" style="width: 90px; margin: 10px 90px; height: 30px">-->

    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <home-outlined/>
        <span>
          <router-link class="text-decoration-none" :to="{name: 'admin-dashboard'}">
            Trang chủ
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="2">
        <desktop-outlined/>
        <span>
          <router-link class="text-decoration-none" :to="{name: 'admin-customer'}">
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
          <router-link class="text-decoration-none" :to="{name: 'admin-users'}">
            Tài khoản
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link class="text-decoration-none" :to="{name: 'admin-role'}">
            Vai trò
          </router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <router-link class="text-decoration-none" :to="{name: 'admin-permission'}">
            Phân quyền
          </router-link>
        </a-menu-item>
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
        <a-menu-item key="6">
          <router-link class="text-decoration-none" :to="{name: 'admin-category'}">
            Danh mục
          </router-link>
        </a-menu-item>
        <a-menu-item key="8">
          <router-link class="text-decoration-none" :to="{name: 'admin-post'} ">
            Bài viết
          </router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <file-outlined/>
        <span>
          <router-link :to="{name: 'admin-warehouse'}" class="text-decoration-none">
            Kho hàng
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="10">
        <file-outlined/>
        <span>
          <router-link :to="{name: 'admin-report'}" class="text-decoration-none">
            Báo cáo
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="11">
        <EnvironmentOutlined />
        <span>
          <router-link :to="{name: 'admin-map'}" class="text-decoration-none">
            Bản đồ
          </router-link>
        </span>
      </a-menu-item>
      <a-menu-item key="12">
        <PieChartOutlined />
        <span>
          <router-link :to="{name: 'admin-chart-evn'}" class="text-decoration-none">
            Biểu đồ
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
  HomeOutlined,
  EnvironmentOutlined
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
    HomeOutlined,
    EnvironmentOutlined
  },
  data() {
    return {
      selectedKeys: []
    }
  },
  props: {
    collapsed: Boolean
  },
  watch: {
    $route(to) {
      this.updateSelectedKeys(to);
    }
  },
  mounted() {
    this.updateSelectedKeys(this.$route);
  },
  methods: {
    handleCollapse(collapsed) {
      this.$emit('collapsedChanged', collapsed);
    },
    updateSelectedKeys(route) {
      let selectedKey = '';

      switch (route.name) {
        case 'admin-dashboard':
          selectedKey = '1';
          break;
        case 'admin-customer':
          selectedKey = '2';
          break;
        case 'admin-users':
          selectedKey = '3';
          break;
        case 'admin-role':
          selectedKey = '4';
          break;
        case 'admin-permission':
          selectedKey = '5';
          break;
        case 'admin-category':
          selectedKey = '6';
          break;
        case 'admin-post':
          selectedKey = '8';
          break;
        case 'admin-warehouse':
          selectedKey = '9';
          break;
        case 'admin-report':
          selectedKey = '10';
          break;
        case 'admin-map':
          selectedKey = '11';
          break;
        case 'admin-chart-evn':
          selectedKey = '12';
          break;
        default:
          selectedKey = '';
      }

      this.selectedKeys = [selectedKey];
    }
  }
});
</script>
