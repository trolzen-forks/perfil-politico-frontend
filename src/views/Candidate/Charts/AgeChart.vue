<template>
  <div class="container">
    <Bar
      v-if="loaded"
      :styles="stylesBar"
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-update="chartData"
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
  props: {
    candidate: {
      type: Number,
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
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
    };
    let currentRole = computed(function () {
      return store.Role.currentRole;
    });

    let currentLocale = computed(function () {
      return store.Locale.currentLocale;
    });
    return {
      store,
      chartOptions,
      currentRole,
      currentLocale
    };
  },
  computed: {
    stylesBar() {
      return {
        position: "relative",
      };
    }
  },
  watch: {
    candidate() {
        return this.chartData.datasets[0].backgroundColor =
          this.candidate < 25
          ? ["#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 25 &&
            this.candidate < 35
          ? ["#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 35 &&
            this.candidate < 45
          ? ["#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 45 &&
            this.candidate < 60
          ? ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 60 &&
            this.candidate < 70
          ? ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9"]
          : ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52"];
      },
  },
  methods: {
    dataCandidate(data) {
      return data.map((i) => i.total)
    },
    async useChartData(role, locale) {
      try {
        const { data } =
        ((role != "presidente") && (role != "senador") && (role != "deputado-federal"))
          ? await services.dataCandidates.characteristic(2018, role, "age", locale)
          : await services.dataCandidates.characteristicFederal(2018, role, "age");

          this.chartData.datasets[0].data = this.dataCandidate(data);
          this.chartData.datasets[0].backgroundColor =
          this.candidate < 25
          ? ["#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 25 &&
            this.candidate < 35
          ? ["#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 35 &&
            this.candidate < 45
          ? ["#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 45 &&
            this.candidate < 60
          ? ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9", "#D9D9D9"]
          : this.candidate >= 60 &&
            this.candidate < 70
          ? ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52", "#D9D9D9"]
          : ["#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#D9D9D9", "#9BDB52"];
          
      this.loaded = true;
    } catch (e) {
      this.error = true;
      }

    }
  },
  mounted() {
    this.loaded = false;
    const role = this.$route.params.role.toString().toLowerCase();
    const locale = this.$route.params.locale.toString().toLowerCase();
    
    this.useChartData(role, locale);
  },
});
</script>
