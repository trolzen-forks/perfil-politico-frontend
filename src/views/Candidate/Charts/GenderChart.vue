<template>
  <div class="container">
    <Doughnut
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

import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

import services from "@/services";
import useStore from "@/hooks/useStore";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default defineComponent({
  name: "Chart",
  props: ['candidate'],
  components: {
    Doughnut,
  },
  data: () => ({
    loaded: false,
    error: false,
    dataAge: null,
    chartData: {
      labels: ["Masculino", "Feminino"],
      datasets: [
        {
          label: "Quantidade",
          backgroundColor: "",
          data: null,
        },
      ],
    },
  }),
  setup() {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
    return {
      chartOptions
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
          ? await services.dataCandidates.characteristic(2018, role, "gender", locale)
          : await services.dataCandidates.characteristicFederal(2018, role, "gender");
      this.chartData.datasets[0].data = data.map((i) => i.total);

      this.chartData.datasets[0].backgroundColor = data.map((i) =>
        i.characteristic === this.candidate.gender
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
