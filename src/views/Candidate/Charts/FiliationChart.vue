<template>
    <div class="container">
      <Line v-if="loaded" :styles="stylesBar" :chart-options="chartOptions" :chart-data="chartData" />
        <div v-if="loaded && error">
          <h4>Não foi possível carregar os dados</h4>
        </div>
      </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue'
  
  import { Line } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Plugin
  } from 'chart.js'

  import services from '@/services'
  import useStore from '@/hooks/useStore'
  
  ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)
  
  export default defineComponent({
    name: 'FiliationChart',
    components: {
        Line
    },
    data: () => ({
      data: null,
      loaded: false,
      error: false,
      chartData: {
          labels: null,
          datasets: [
            {
              label: 'Patrimônio declarado',
              backgroundColor: '#5A44A0',
              borderColor: '#5A44A0',
              pointRadius: 8,
              data: null,
            },
            {
              label: 'Mediana do patrimônio declarado de todas as candidaturas eleitas',
              backgroundColor: '#9BDB52',
              borderColor: '#9BDB52',
              pointRadius: 8,
              data: null,
            },
            {
              label: 'Mandato eletivo',
              backgroundColor: '#9BDB52',
              borderColor: '#9BDB52',
              pointRadius: 8,
              data: null,
            }
          ]
      }
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
      }
      return {
        store,
        currentRole,
        chartOptions,
        currentCandidateSelected,
        currentLocale
      }
    },
    computed: {
      stylesBar () {
        return {
          position: 'relative'
        }
      }
    },
    async mounted () {
      this.loaded = false
      console.log("kaskso", this.store.Candidates.currentCandidateSelected.asset_history)
      try {
        const { data } = await services.dataCandidates.assets(this.currentLocale, this.currentRole);
        this.chartData.labels = data.mediana_patrimonios.map(i => i.year);
        this.chartData.datasets[0].data = this.store.Candidates.currentCandidateSelected.asset_history.map(i =>  i.value);
        this.chartData.datasets[1].data = data.mediana_patrimonios.map(i =>  i.value);
        this.chartData.datasets[2].data = this.store.Candidates.currentCandidateSelected.affiliation_history.map(i =>  i.party);
        this.loaded = true;
      } catch (e) {
        this.error = true;
      }
    }
  })
  </script>
  