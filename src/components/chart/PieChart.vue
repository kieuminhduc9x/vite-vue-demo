<template>
  <div>
    <Pie :data="data" :options="options" ref="pieChart" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  components: {
    Pie
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
          this.$refs.pieChart._chart.update();
        });
      }
    }
  }
};
</script>
