<template>
  <div class="container">
    <div id="chart">
      <Scatter
      :styles="stylesBar"
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, createApp, defineComponent } from "vue";
import useStore from "@/hooks/useStore";
import { Scatter } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Plugin
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

export default defineComponent({
  name: "FiliationChart",
  components: {
    Scatter
  },
  data: () => ({
    loaded: false,
    error: false,
    chartData: {
      labels:["a","b"],
      datasets: [
        {
          label: "Quantidade",
          borderColor:"rgb(75, 192, 192)",
          borderRadius: Number.MAX_VALUE,
          data: [
            {x: 2010, y: 0}, 
            {x: 2016, y: 0}
          ],
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
        xAxes: [{
          type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT) 
          display: true, // mandatory
          scaleLabel: {
              display: true, // mandatory
              labelString: 'Your label' // optional 
          },
        }], 
        yAxes: [{ // and your y axis customization as you see fit...
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Count'
          }
        }],
      }
    };

    return {
      store,
      currentRole,
      currentCandidateSelected,
      currentLocale,
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
  //   async mounted() {
  //     console.log("AAAAA")
  //     try {
  //     console.log("BBBBB")
  //     this.store.Candidates.currentCandidateSelected.affiliation_history.map(i => console.log(Number(i.started_in.substr(0,4))));
  //       console.log("CCCCC")
  //       this.chartData.labels = this.store.Candidates.currentCandidateSelected.affiliation_history.map(i => i.party);
  //       this.chartData.datasets[0].data = this.store.Candidates.currentCandidateSelected.affiliation_history.map(i => Number(i.started_in.substr(0,4)));
  //     } catch (e) {
  //       this.error = true;
  //     }
  //   },
});
</script>
