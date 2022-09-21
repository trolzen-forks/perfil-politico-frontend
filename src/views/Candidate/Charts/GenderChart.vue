<template>
  <div class="container">
    <Doughnut
      :styles="stylesBar"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
    <div v-if="error">
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
  Plugin,
} from "chart.js";

import services from "@/services";
import useStore from "@/hooks/useStore";
import { setCharacteristicGender } from "@/store/candidates";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default defineComponent({
  name: "EthnicityChart",
  props: {
    candidate: {
      type: String,
      required: true,
    },
    dataGenderChart: {
      type: Object,
      required: true,
    },
  },
  components: {
    Doughnut,
  },
  data: () => ({
    loaded: false,
    error: false,
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
    const store = useStore();
    return {
      chartOptions,
      store
    };
  },
  watch: {
    candidate() {
        return this.chartData.datasets[0].backgroundColor = this.dataGenderChart.map((i) =>
        i.characteristic === this.candidate
          ? "#9BDB52"
          : "#D9D9D9"
      );
    },
  },
  methods: {
    dataGender() {
      this.chartData.datasets[0].data = this.store.Candidates.currentCharacteristicGender.map((i) => i.total);

      this.chartData.datasets[0].backgroundColor = this.store.Candidates.currentCharacteristicGender.map((i) =>
        i.characteristic === this.candidate
          ? "#9BDB52"
          : "#D9D9D9"
      );
    }
  },
  async mounted() {
    const roleCandidate = this.$route.params.role.toString().toLowerCase();
    const localeCandidate = this.$route.params.locale.toString().toLowerCase();
    const { data } = ((roleCandidate != "presidente") && (roleCandidate != "senador") && (roleCandidate != "deputado-federal"))
      ? await services.dataCandidates.characteristic(2018, roleCandidate, "gender", localeCandidate)
      : await services.dataCandidates.characteristicFederal(2018, roleCandidate, "gender"
      );
      
    setCharacteristicGender(data);
    this.dataGender();
  }
});
</script>
