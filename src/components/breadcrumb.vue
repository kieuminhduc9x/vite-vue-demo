<template v-slot:breadcrumb>
  <div class="d-flex justify-content-start bg-white h-[30px]  p-2">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <HomeOutlined style="margin-bottom: 5px"/>
      </a-breadcrumb-item>
      <a-breadcrumb-item
          v-for="(item, index) in breadcrumbs"
          :key="index"
          :class=" index === breadcrumbs.length - 1 ? 'active' : '' ">{{ item.name }}
      </a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>

import {HomeOutlined} from '@ant-design/icons-vue'
export default {
  components: {
    HomeOutlined
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  name: 'Breadcrumb'
}
</script>
<style lang="less">
.ant-breadcrumb-link {
  font-size: 14px;
  font-weight: 500;
}
</style>
