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
  name: "AgeChart",
  components: {
    Bar,
  },
  data: () => ({
    loaded: false,
    error: false,
    chartData: {
      labels: [
        "Até 24",
        "de 25 a 34",
        "de 35 a 44",
        "de 45 a 59",
        "de 60 a 69",
        "70 ou mais",
      ],
      datasets: [
        {
          label: "Quantidade",
          backgroundColor: [""],
          borderRadius: Number.MAX_VALUE,
          data: null,
        },
      ],
    },
  }),
  setup() {
    const store = useStore();
    let currentRole = computed(function () {
      return store.Role.currentRole;
    });
    let currentCandidateSelected = computed(function () {
      return store.Candidates.currentCandidateSelected;
    });
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
    };
    return {
      currentRole,
      chartOptions,
      currentCandidateSelected,
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
    const role = (this.$route.params.role).toString();

    try {
      const { data } = await services.dataCandidates.characteristic(
        2018,
        role,
        "age"
      );
      this.chartData.datasets[0].data = data.map((i) => i.total);

      this.chartData.datasets[0].backgroundColor =
        this.currentCandidateSelected.age < 25
          ? ["#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.currentCandidateSelected.age >= 25 &&
            this.currentCandidateSelected.age < 35
          ? ["#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.currentCandidateSelected.age >= 35 &&
            this.currentCandidateSelected.age < 45
          ? ["#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.currentCandidateSelected.age >= 45 &&
            this.currentCandidateSelected.age < 60
          ? ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9"]
          : this.currentCandidateSelected.age >= 60 &&
            this.currentCandidateSelected.age < 70
          ? ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9"]
          : ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52"];

      this.loaded = true;
    } catch (e) {
      this.error = true;
    }
  },
});
</script>
