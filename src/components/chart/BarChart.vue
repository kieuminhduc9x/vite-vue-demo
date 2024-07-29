<template>
  <div>
    <Bar :data="data" :options="options" ref="barChart" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  components: {
    Bar
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          this.$refs.barChart._chart.update();
        });
      }
    }
  }
};
</script>
