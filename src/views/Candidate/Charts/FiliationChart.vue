<template>
  <div class="container">
    <div id="chart">
      <apexchart
        fill="#eeedf4"
        x="70"
        width="890"
        y="290"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, createApp, defineComponent } from "vue";
import useStore from "@/hooks/useStore";

export default defineComponent({
  name: "FiliationChart",
  data: () => ({
    series: [
      {
        name: "SAMPLE A",
        data: [["2020", 0]],
      },
      {
        name: "SAMPLE B",
        data: [["2016", 0]],
      },
    ],
    chartOptions: {
      chart: {
        height: 10,
        type: "scatter",
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        type: "datetime",
        tickPlacement: "between",
      },
      yaxis: {
        max: 0,
      },
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

    // const chartOptions = {
    //     responsive: true,
    //     indexAxis: 'y',
    //     maintainAspectRatio: false,
    //     layout: {
    //         padding: 10
    //     },
    //     scales: {
    //         x: {
    //             stacked: true,
    //         },
    //         y: {
    //             stacked: true
    //         }
    //     }
    // };

    return {
      store,
      currentRole,
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
