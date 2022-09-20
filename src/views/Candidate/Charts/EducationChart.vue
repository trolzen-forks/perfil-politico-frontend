<template>
  <div class="container">
    <Bar
      v-if="loaded"
      :styles="stylesBar"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
    <div v-if="loaded && error">
      <h4>Não foi possível carregar os dados</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import services from "@/services";
import useStore from "@/hooks/useStore";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "EducationChart",
  props: ['candidate'],
  components: {
    Bar,
  },
  data: () => ({
    loaded: false,
    error: false,
    dataAge: null,
    chartData: {
      labels: [],
      datasets: [
        {
          label: "Quantidade",
          backgroundColor: "",
          borderRadius: Number.MAX_VALUE,
          data: null,
        },
      ],
    },
  }),
  setup() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
    };
    return {
      chartOptions,
    };
  },
  computed: {
    stylesBar() {
      return {
        position: "relative",
      };
    },
  },
  async mounted() {
    this.loaded = false;
    const role = this.$route.params.role.toString().toLowerCase();
    const locale = this.$route.params.locale.toString().toLowerCase();

    try {
      const { data } =
        ((role != "presidente") && (role != "senador") && (role != "deputado-federal"))
          ? await services.dataCandidates.characteristic(2018, role, "education", locale)
          : await services.dataCandidates.characteristicFederal(2018, role, "education");

      this.chartData.datasets[0].data = data.map((i) => i.total);
      this.chartData.labels = data.map((i) => i.characteristic)
      this.chartData.datasets[0].backgroundColor = data.map((i) =>
        i.characteristic === this.candidate.education
          ? "#9BDB52"
          : "#D9D9D9"
      );
      this.loaded = true;
    } catch (e) {
      this.error = true;
    }
  },
});
</script>
