<template>
  <div class="container">
    <Bar
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
import { defineComponent } from "vue";

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
import { setCharacteristicEducation } from "@/store/candidates";
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
  props: {
    candidate: {
      type: String,
      required: true,
    },
    dataEducationChart: {
      type: Object,
      required: true,
    },
  },
  components: {
    Bar,
  },
  data: () => ({
    loaded: false,
    error: false,
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
    const store = useStore();
    return {
      chartOptions,
      store
    };
  },
  computed: {
    stylesBar() {
      return {
        position: "relative",
      };
    },
  },
  watch: {
    candidate() {
        return this.chartData.datasets[0].backgroundColor = this.dataEducationChart.map((i) =>
        i.characteristic === this.candidate
          ? "#9BDB52"
          : "#D9D9D9"
      );
    },
  },
  methods: {
    dataEducation() {
      this.chartData.datasets[0].data = this.store.Candidates.currentCharacteristicEducation.map(i => i.total)
      this.chartData.labels = this.store.Candidates.currentCharacteristicEducation.map(i => i.characteristic)
      this.chartData.datasets[0].backgroundColor = this.store.Candidates.currentCharacteristicEducation.map(i =>
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
      ? await services.dataCandidates.characteristic(2018, roleCandidate, "education", localeCandidate)
      : await services.dataCandidates.characteristicFederal(2018, roleCandidate, "education"
      );
      
    setCharacteristicEducation(data);
    this.dataEducation();
  }
});
</script>
