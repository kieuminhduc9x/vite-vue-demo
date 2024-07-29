<template>
  <div id="chart_evn">
    <a-row :gutter="16">
      <a-col :lg="8" :md="8" :xs="24">
        <a-card :title="'Thống kê giao dịch'" style="margin-top: 15px; min-height: 250px">
          <BarChart ref="barChart" :data="dataBarChart" :options="optionsBarChart" />
        </a-card>
      </a-col>
      <a-col :lg="8" :md="8" :xs="24">
        <a-card :title="'Thống kê giao dịch'" style="margin-top: 15px; min-height: 250px">
          <BarChart ref="horizontalBarChart" :data="dataHorizontalBarChart" :options="optionsHorizontalBarChart" />
        </a-card>
      </a-col>
      <a-col :lg="8" :md="8" :xs="24">
        <a-card :title="'Biểu đồ tròn'" style="margin-top: 15px; min-height: 250px">
          <PieChart ref="pieChart" :data="dataPieChart" :options="optionsPieChart" />
        </a-card>
      </a-col>
      <a-col :lg="8" :md="8" :xs="24">
        <a-card :title="'Biểu đồ đường'" style="margin-top: 15px; min-height: 250px">
          <LineChart ref="lineChart" :data="dataLineChart" :options="optionsLineChart" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import io from 'socket.io-client';
import { ref, onMounted, nextTick } from 'vue';
import { Bar, Pie, Line } from 'vue-chartjs';

export default {
  components: {
    BarChart: Bar,
    PieChart: Pie,
    LineChart: Line
  },
  setup() {
    const barChartRef = ref(null);
    const pieChartRef = ref(null);
    const lineChartRef = ref(null);
    const horizontalBarChartRef = ref(null);

    const dataBarChart = ref({
      labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
      datasets: [
        {
          label: 'Giao dịch',
          data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
          borderColor: '#3e95cd',
          backgroundColor: '#acd5f5',
          fill: true
        }
      ]
    });

    const optionsBarChart = ref({
      title: {
        display: true,
        text: 'Giá trị',
        position: 'left',
        color: '#3e95cd'
      },
      responsive: true,
      maintainAspectRatio: false
    });

    const dataHorizontalBarChart = ref({
      labels: ['Hạng mục 1', 'Hạng mục 2', 'Hạng mục 3', 'Hạng mục 4'],
      datasets: [
        // {
        //   label: 'Giá trị',
        //   data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)),
        //   backgroundColor: '#42A5F5',
        //   borderColor: '#1E88E5',
        //   borderWidth: 1
        // }
        {
          label: 'Giá trị 1',
          data: [10, 20, 30, 40],
          backgroundColor: '#42A5F5'
        },
        {
          label: 'Giá trị 2',
          data: [20, 30, 40, 50],
          backgroundColor: '#66BB6A'
        },
        {
          label: 'Giá trị 3',
          data: [30, 40, 50, 60],
          backgroundColor: '#FF7043'
        }
      ]
    });

    const optionsHorizontalBarChart = ref({
      indexAxis: 'y', // Để biểu đồ dạng ngang
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw}`;
            }
          }
        }
      }
    });

    const dataPieChart = ref({
      labels: ['Thông số 1', 'Thông số 2', 'Thông số 3', 'Thông số 4'],
      datasets: [
        {
          backgroundColor: ['#82d79d', '#fd82c0', '#89edff', '#ee7d7d'],
          data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 100))
        }
      ]
    });

    const optionsPieChart = ref({
      responsive: true,
      maintainAspectRatio: false
    });

    const dataLineChart = ref({
      labels: Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`),
      datasets: [
        {
          label: 'Doanh thu',
          data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
          borderColor: '#ff6384',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true
        }
      ]
    });

    const optionsLineChart = ref({
      title: {
        display: true,
        text: 'Doanh thu theo thời gian',
        position: 'left',
        color: '#ff6384'
      },
      responsive: true,
      maintainAspectRatio: false
    });

    const socket = io('http://localhost:4000');

    onMounted(() => {
      socket.on('connect', () => {
        console.log('Connected to WebSocket server');
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from WebSocket server');
      });

      socket.on('newChartData', (newData) => {
        console.log('Received new data from WebSocket', newData);
        updateCharts(newData);
      });

      socket.on('connect_error', (error) => {
        console.error('WebSocket connection error:', error);
      });
    });

    function updateCharts(newData) {
      dataBarChart.value = newData.barChart;
      dataHorizontalBarChart.value = newData.horizontalBarChart;
      dataPieChart.value = newData.pieChart;
      dataLineChart.value = newData.lineChart;

      nextTick(() => {
        if (barChartRef.value) {
          barChartRef.value.$data._chart.update(); // Cập nhật biểu đồ Bar
        }

        if (horizontalBarChartRef.value) {
          horizontalBarChartRef.value.$data._chart.update(); // Cập nhật biểu đồ Bar
        }

        if (pieChartRef.value) {
          pieChartRef.value.$data._chart.update(); // Cập nhật biểu đồ Pie
        }

        if (lineChartRef.value) {
          lineChartRef.value.$data._chart.update(); // Cập nhật biểu đồ Line
        }
      });
    }

    return {
      barChartRef,
      dataBarChart,
      optionsBarChart,
      horizontalBarChartRef,
      dataHorizontalBarChart,
      optionsHorizontalBarChart,
      pieChartRef,
      dataPieChart,
      optionsPieChart,
      lineChartRef,
      dataLineChart,
      optionsLineChart
    };
  }
};
</script>

<style lang="less">
#chart_evn {
  width: 100%;
  padding: 15px;
}
</style>
