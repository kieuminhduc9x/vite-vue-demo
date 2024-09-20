<template>
  <Breadcrumb :breadcrumbs="breadcrumbs"/>
  <div class="p-3">

    <a-card title="Danh sách báo cáo">
      <a-radio-group v-model:value="selectedValue" name="radioGroup" class="w-full">
        <a-row :gutter="16">
          <a-col :xs="24" :md="8" :lg="8">
            <a-radio class="radioStyle" v-for="(option, index) in radioOptions.slice(0, 3)" :key="index"
                     :value="option.value">
              {{ option.label }}
            </a-radio>
          </a-col>
          <a-col :xs="24" :md="8" :lg="8">
            <a-radio class="radioStyle" v-for="(option, index) in radioOptions.slice(4, 7)" :key="index"
                     :value="option.value">
              {{ option.label }}
            </a-radio>
          </a-col>
          <a-col :xs="24" :md="8" :lg="8">
            <a-radio class="radioStyle" v-for="(option, index) in radioOptions.slice(8, 10)" :key="index"
                     :value="option.value">
              {{ option.label }}
            </a-radio>
          </a-col>
        </a-row>
      </a-radio-group>
      <!--          </a-form>-->

    </a-card>
    <a-card title="Kết quả tìm kiếm" class="mt-3">
      <a-table
          :data-source="data"
          :columns="columns"
          :pagination="false"
      ></a-table>
    </a-card>
  </div>
</template>
<script>
import Breadcrumb from "../../components/breadcrumb.vue";
import columns from "./columns.js";
import Camera from "../../components/Camera/Camera.vue";
import Video from "../../components/video/Video.vue";

export default {
  components: {
    Breadcrumb,
    Camera,
    Video
  },
  data() {
    return {
      breadcrumbs: [
        {
          name: 'Báo cáo'
        }
      ],
      activeKey: [1, 2],
      form: {
        name: '',
        phone: '',
        email: ''
      },
      data: [],
      loading: false,
      columns,
      selectedValue: 1,
      radioOptions: [
        {value: 1, label: "Báo cáo tổng hợp doanh thu ngày"},
        {value: 2, label: "Báo cáo tổng hợp doanh thu tháng"},
        {value: 3, label: "Báo cáo tổng hợp doanh thu năm"},
        {value: 4, label: "Báo cáo tổng hợp doanh thu quý"},
        {value: 5, label: "Báo cáo chi tiết"},
        {value: 6, label: "Báo cáo hàng hóa"},
        {value: 7, label: "Báo cáo khách hàng"},
        {value: 8, label: "Báo cáo nhân viên"},
        {value: 9, label: "Báo cáo tài chính"},
        {value: 10, label: "Báo cáo quản lý"}
      ],
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
.radioStyle {
  width: 100%;
  display: flex;
  height: 30px;
  line-height: 30px;
}
</style>
