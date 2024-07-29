<template>
  <div>
    <Line :data="data" :options="options" ref="lineChart" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

export default {
  components: {
    Line
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
  methods: {
    update() {
      this.$nextTick(() => {
        this.$refs.lineChart._chart.update();
      });
    }
  }
};
</script>
