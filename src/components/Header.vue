<template>
  <div class="w-full flex justify-between" style="padding: 0 25px">
    <div class="flex justify-content-start">
      <MenuFoldOutlined v-if="collapsed" @click="changeCollapsed"
                        :style="{'color': '#000000', 'fontSize': '20px!important', 'margin-top': '20px'}"/>
      <MenuUnfoldOutlined v-else @click="changeCollapsed"
                          :style="{'color': '#000000', 'fontSize': '20px!important', 'margin-top': '20px'}"/>
<!--                <span style="font-size: 18px ;font-weight: 500; margin-left: 25px">ATIS</span>-->
    </div>
    <div class="flex justify-content-end pt-[24px]">
      <a-dropdown :trigger="'click'" class="pointer-event">
        <template #overlay>
          <a-menu>
            <a-menu-item key="1">
              Thông tin chi tiết
            </a-menu-item>
            <a-menu-item key="2" @click="logout">
              Đăng xuất
            </a-menu-item>
          </a-menu>
        </template>
        <font-awesome-icon icon="fa-regular fa-user" size="lg" style="outline: none"/>
      </a-dropdown>
    </div>
  </div>
  <a-drawer
      v-model:visible="visibleMenu"
      title="Danh sách chức năng"
      placement="left"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons-vue";
import {defineComponent, ref} from 'vue';
import {createRouter as route} from "vue-router";
import router from "../router/index.js";

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  props: {
    collapsed: Boolean
  },
  setup(props, { emit }) {
    const visibleMenu = ref(false);

    const changeCollapsed = () => {
      emit('collapsedChanged', !props.collapsed);
    };

    const logout = () => {
      localStorage.clear();
      router.push({ path: '/login' });
    };

    return {
      visibleMenu,
      changeCollapsed,
      logout
    };
  }
});
</script>
<style>
.ant-layout-header {
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}
</style>
