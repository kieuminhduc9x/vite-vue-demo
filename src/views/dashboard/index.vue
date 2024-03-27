<template>
  <div id="app">
    <a-row :gutter="16">
      <a-col :lg="6" :md="6" :xs="24">
        <div
            class="overview"
            style=" background-image: linear-gradient(#233086,#5E72EB);">
          <span
              style="color: #ffffff; font-size: 24px; font-weight: 500;display: block">{{
              (this.totalTransaction)
            }}</span>
          <span style="color: white;font-size: 18px; font-weight: 500; margin-top: 5px; display: block">
            Tổng giao dịch</span>
        </div>
      </a-col>
      <a-col :lg="6" :md="6" :xs="24">
        <div
            class="overview"
            style="background-image: linear-gradient(#004E9A,#428CD4);">
          <span style="color: #ffffff; font-size: 24px; font-weight: 500;display: block">{{
              (this.totalVehicle)
            }}</span>
          <span style="color: white;font-size: 18px; font-weight: 500; margin-top: 5px; display: block">
            Tổng số xe</span>
        </div>
      </a-col>
      <a-col :lg="6" :md="6" :xs="24">
        <div
            class="overview"
            style="background-image: linear-gradient(#C73886,#FE676E)">
          <span style="color: #ffffff; font-size: 24px; font-weight: 500;display: block">{{
              (this.totalCard)
            }}</span>
          <span style="color: white;font-size: 18px; font-weight: 500; margin-top: 5px; display: block">
            Số vé tồn</span>
        </div>
      </a-col>
      <a-col :lg="6" :md="6" :xs="24">
        <div
            class="overview"
            style="background-image: linear-gradient(#FA897B,#FFDD94);">
          <span style="color: #ffffff; font-size: 24px; font-weight: 500;display: block">{{
              (this.totalViolationVehicle)
            }}</span>
          <span style="color: white;font-size: 18px; font-weight: 500; margin-top: 5px; display: block">
            Xe vi phạm</span>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :lg="16" :md="16" :xs="24">
        <a-card :title="'Thống kê giao dịch'" style="margin-top: 15px; min-height: 400px">
          <a slot="extra" href="#">Xem thêm</a>
          <BarChart
              ref="barChart"
              :chartKey="chart_key"
              :data="dataChart"
              :options="options">
          </BarChart>
        </a-card>
      </a-col>
      <a-col :lg="8" :md="8" :xs="24">
        <a-card :title="'Danh sách chức năng'" style="margin-top: 15px; min-height: 400px">
          <PieChart :chartKey="pie_chart_key" :data="dataPie" :options="optionsPie"/>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="16" style="margin-top: 15px">
      <a-col :lg="6" :md="6" :xs="24">
        <div style="width: 100%; display: flex; justify-content: space-between; background-color: white">
          <div style="background-color: #fd4242; width: 35%; text-align: center; padding: 25px">
            <UserOutlined :style="{ fontSize: '48px!important', color: '#ffffff' }" />
          </div>
          <div style="width: 65%; padding: 10px;">
            <span style="color:#fd4242; font-size: 18px; font-weight: 500; display: block">Tài khoản</span>
            <span style="color: black; font-size: 24px; font-weight: 500; display: block; margin-top: 5px">{{
                (this.totalUser)
              }}</span>
          </div>
        </div>
        <div
            style="width: 100%; display: flex; justify-content: space-between; background-color: white; margin-top: 15px">
          <div style="background-color:rgba(18,114,253,0.88); width: 35%; text-align: center; padding: 25px">
              <TeamOutlined :style="{ fontSize: '48px!important', color: '#ffffff' }"></TeamOutlined>
          </div>
          <div style="width: 65%; padding: 10px;">
            <span style="color:rgba(18,114,253,0.88); font-size: 18px; font-weight: 500; display: block">Đơn vị</span>
            <span style="color: black; font-size: 24px; font-weight: 500; display: block; margin-top: 5px">{{
                (this.totalUnit)
              }}</span>
          </div>
        </div>
      </a-col>
      <a-col :lg="18" :md="18" :xs="24">
        <a-card :title="'Giao dịch gần đây'">
          <a-table
              ref="tb1"
              :columns="columns"
              :data-source="data"
              :loading="false"
              :locale="{ emptyText: 'Chưa có dữ liệu' }"
              :pagination="false"
              :rowKey=" (rowKey, index ) => index"
              :scroll="{ x: '100%', y: '250px' }"
              class="ant-table-bordered">
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import BarChart from '../../components/chart/BarChart.vue';
import PieChart from '../../components/chart/PieChart.vue';
import {TeamOutlined, UserOutlined} from '@ant-design/icons-vue'
import columns from "./columns.js";

export default {
  components: {
    BarChart,
    PieChart,
    TeamOutlined,
    UserOutlined
  },
  data() {
    return {
      columns,
      data: [],
      chart_key: 1,
      dataChart: {
        labels: ['Tháng 1', 'Tháng 2 ', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [
          {
            label: 'Giao dịch',
            data: [120, 150, 180, 250, 480, 550, 300, 650, 580, 650, 350, 750],
            borderColor: '#3e95cd',
            backgroundColor: '#acd5f5',
            fill: true
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Giá trị',
          position: 'left',
          color: '#3e95cd'
        },
        responsive: true,
        maintainAspectRatio: false
      },
      pie_chart_key: 2,
      dataPie: {
        labels: ['Thông số 1', 'Thông số 2', 'Thông số 3', 'Thông số 4'],
        datasets: [
          {
            backgroundColor: ['#82d79d', '#fd82c0', '#89edff', '#ee7d7d'],
            data: [40, 20, 80, 10]
          }
        ]
      },
      optionsPie: {
        responsive: true,
        maintainAspectRatio: false
      },
      totalTransaction: 0,
      totalVehicle: 0,
      totalCard: 0,
      totalViolationVehicle: 0,
      totalUser: 0,
      totalUnit: 0
    };
  }
};
</script>
<style lang="less">
.overview {
  width: 100%;
  height: 100px;
  padding: 15px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
