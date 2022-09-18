<template>
  <div class="container">
    <Line
      v-if="loaded"
      :styles="stylesBar"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
    <svg viewBox="0 0 100% 100" width="100%" height="100">
      <rect width="100%" height="12" y="0" x="70" fill="#eeedf4"></rect>
      <template v-for="item of dataFiliation" :key="item">
          <rect class="affil-point" width="12" height="12" :x="item[0].qtd+'%'" y="0"></rect>
          <text class="affil-text" text-anchor="middle" font-family="sans-serif" :x="item[0].qtd+'%'" dy="45">{{item[0].name}}</text>
          <text class="affil-text text-xs" text-anchor="middle" font-family="sans-serif" :x="item[0].qtd+'%'" dy="65">({{item[0].started}})</text>
      </template>
    </svg>
    <div v-if="loaded && error">
      <h4>Não foi possível carregar os dados</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
} from "chart.js";

import services from "@/services";
import useStore from "@/hooks/useStore";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default defineComponent({
  name: "PatrimonyChart",
  components: {
    Line
},
  data: () => ({
    data: null,
    loaded: false,
    error: false,
    dataFiliation: null,
    chartData: {
      labels: [""],
      datasets: [
        {
          label: "Patrimônio declarado da pessoa candidata",
          backgroundColor: "#5A44A0",
          borderColor: "#5A44A0",
          pointRadius: 8,
          data: null,
        },
        {
          label:
            "Mediana do patrimônio declarado de todas as candidaturas eleitas",
          backgroundColor: "#9BDB52",
          borderColor: "#9BDB52",
          pointRadius: 8,
          data: null,
        },
        {
          label: "Filiações",
          backgroundColor: "#333",
          borderColor: "#333",
        },
      ],
    },
  }),
  setup() {
    const store = useStore();

    let currentCandidateSelected = computed(function () {
      return store.Candidates.currentCandidateSelected;
    });

    let currentRole = computed(function () {
      return store.Role.currentRole;
    });

    let currentLocale = computed(function () {
      return store.Locale.currentLocale;
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          position: "top",
          title: {
            display: false,
            text: "Anos",
          },
        },
        y: {
          title: {
            display: true,
            text: "R$",
          },
        },
      },
    };
    return {
      store,
      currentRole,
      chartOptions,
      currentCandidateSelected,
      currentLocale,
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
    const locale = this.$route.params.locale.toString();

    try {
      const { data } = role != 'presidente' ? await services.dataCandidates.assets(locale, role) : await services.dataCandidates.assets();
      
      let yearMedian = data.mediana_patrimonios.map((i) => i.year);
      let yearPatrimony = yearMedian.concat(this.store.Candidates.currentCandidateSelected.asset_history.map((i) => i.year));
      
      const yearLabel = yearPatrimony.filter(function(value){
        return !yearMedian.some(function(value2){
            return value == value2;
        });
      });

      const configureYearMedian = yearMedian.filter((c, index) => {
          return yearMedian.indexOf(c) === index;
      });

      const years = configureYearMedian.concat(yearLabel).sort();
      
      let startedFiliations = this.store.Candidates.currentCandidateSelected.affiliation_history.map((i) => Number(i.started_in.substr(0,4)));
      console.log(years, startedFiliations)
      const configureYearFiliationMedian = startedFiliations.filter(function(value){
        return !years.some(function(value2){
            return value == value2;
        });
      });

      const configureYearFiliation = configureYearFiliationMedian.filter((c, index) => {
          return configureYearFiliationMedian.indexOf(c) === index;
      });

      const yearsWithFiliations = years.concat(configureYearFiliation).sort()

      const party = this.store.Candidates.currentCandidateSelected.affiliation_history.map((i,index) => [{name: i.party, started: Number((i.started_in.substr(0,4))), qtd: (((years.concat(configureYearFiliation).sort()).indexOf(Number(i.started_in.substr(0,4)))+1)*100)/years.concat(configureYearFiliation).length}]);

      this.dataFiliation = party
      this.chartData.labels = !startedFiliations[0] ? years : yearsWithFiliations;
      this.chartData.datasets[0].data = this.store.Candidates.currentCandidateSelected.asset_history.map(
          (i) => [i.year, i.value]
        );
      this.chartData.datasets[1].data = data.mediana_patrimonios.map(
        (i) => [i.year, i.value]
      );
      this.loaded = true;
    } catch (e) {
      this.error = true;
    }
  },
});
</script>
