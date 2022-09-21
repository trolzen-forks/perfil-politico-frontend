<template>
  <div class="container">
    <Line
      :styles="stylesBar"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-update="chartData"
    />
    <svg viewBox="0 0 100% 100" width="100%" height="100">
      <rect width="100%" height="12" y="0" x="70" fill="#eeedf4"></rect>
      <template v-for="item of dataFiliation" @change="dataFiliation" :key="item">
        <rect
          class="affil-point"
          width="12"
          height="12"
          :x="item[0].qtd >= 100 ? '98%' : item[0].qtd + '%'"
          y="0"
        ></rect>
        <text
          class="affil-text text-sm"
          text-anchor="middle"
          font-family="sans-serif"
          :x="item[0].qtd >= 100 ? '98%' : item[0].qtd + '%'"
          dy="45"
        >
          {{ item[0].name }}
        </text>
        <text
          class="affil-text text-xs"
          text-anchor="middle"
          font-family="sans-serif"
          :x="item[0].qtd >= 100 ? '98%' : item[0].qtd + '%'"
          dy="65"
        >
          ({{ item[0].started }})
        </text>
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
} from "chart.js";

import services from "@/services";
import useStore from "@/hooks/useStore";
import { setAssets } from "@/store/candidates";

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
  props: {
    candidate: {
      type: Object,
      required: true,
    },
    dataAssets: {
      type: Object,
      required: true,
    },
  },
  components: {
    Line,
  },
  data: () => ({
    data: null,
    loaded: false,
    error: false,
    dataFiliation: {},
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
      chartOptions,
    };
  },
  watch: {
    candidate() {
      let yearMedian = this.dataAssets.mediana_patrimonios.map((i) => i.year);
      
      let yearPatrimony = yearMedian.concat(
        this.candidate.asset_history.map(
          (i) => i.year
        )
      );

      const yearLabel = yearPatrimony.filter(function (value) {
        return !yearMedian.some(function (value2) {
          return value == value2;
        });
      });

      const configureYearMedian = yearMedian.filter((c, index) => {
        return yearMedian.indexOf(c) === index;
      });

      const years = configureYearMedian.concat(yearLabel).sort();

      let startedFiliations = this.candidate.affiliation_history.map(
          (i) => Number(i.started_in.substr(0, 4))
      );
      
      const configureYearFiliationMedian = startedFiliations.filter(function (value) {
        return !years.some(function (value2) {
          return value == value2;
        });
      });

      const configureYearFiliation = configureYearFiliationMedian.filter(
        (c, index) => {
          return configureYearFiliationMedian.indexOf(c) === index;
        }
      );

      const yearsWithFiliations = years.concat(configureYearFiliation).sort();

      this.dataFiliation = this.candidate.affiliation_history.map(
        (i) => [
          {
            name: i.party,
            started: Number(i.started_in.substr(0, 4)),
            qtd:
              ((years
                .concat(configureYearFiliation)
                .sort()
                .indexOf(Number(i.started_in.substr(0, 4))) +
                1) *
                100) /
              years.concat(configureYearFiliation).length,
          },
        ]
      );

      this.chartData.labels = !startedFiliations[0]
        ? years
        : yearsWithFiliations;
      this.chartData.datasets[0].data =
        this.candidate.asset_history.map(
          (i) => [i.year, i.value]
        );
      this.chartData.datasets[1].data = this.dataAssets.mediana_patrimonios.map((i) => [
        i.year,
        i.value,
      ]);
    },
  },
  methods: {
    dataAssetsAndAffiliations() {
      let yearMedian = this.store.Candidates.currentAssets.mediana_patrimonios.map((i) => i.year);
      
      let yearPatrimony = yearMedian.concat(
        this.candidate.asset_history.map(
          (i) => i.year
        )
      );

      const yearLabel = yearPatrimony.filter(function (value) {
        return !yearMedian.some(function (value2) {
          return value == value2;
        });
      });

      const configureYearMedian = yearMedian.filter((c, index) => {
        return yearMedian.indexOf(c) === index;
      });

      const years = configureYearMedian.concat(yearLabel).sort();

      let startedFiliations = this.candidate.affiliation_history.map(
          (i) => Number(i.started_in.substr(0, 4))
      );
      
      const configureYearFiliationMedian = startedFiliations.filter(function (value) {
        return !years.some(function (value2) {
          return value == value2;
        });
      });

      const configureYearFiliation = configureYearFiliationMedian.filter(
        (c, index) => {
          return configureYearFiliationMedian.indexOf(c) === index;
        }
      );

      const yearsWithFiliations = years.concat(configureYearFiliation).sort();

      const party =
        this.candidate.affiliation_history.map(
          (i) => [
            {
              name: i.party,
              started: Number(i.started_in.substr(0, 4)),
              qtd:
                ((years
                  .concat(configureYearFiliation)
                  .sort()
                  .indexOf(Number(i.started_in.substr(0, 4))) +
                  1) *
                  100) /
                years.concat(configureYearFiliation).length,
            },
          ]
        );

      this.dataFiliation = party;
      this.chartData.labels = !startedFiliations[0]
        ? years
        : yearsWithFiliations;
      this.chartData.datasets[0].data =
        this.candidate.asset_history.map(
          (i) => [i.year, i.value]
        );
      this.chartData.datasets[1].data = this.store.currentAssets.mediana_patrimonios.map((i) => [
        i.year,
        i.value,
      ]);
    }
  },
  async mounted() {
    const { data } = await services.dataCandidates.assets();

    setAssets(data);
    this.dataAssetsAndAffiliations();
  }
});
</script>
