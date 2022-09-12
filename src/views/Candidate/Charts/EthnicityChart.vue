<template>
    <div class="container">
      <Doughnut v-if="loaded" :styles="stylesBar" :chart-options="chartOptions" :chart-data="chartData" />
      <div v-if="loaded && error">
        <h4>Não foi possível carregar os dados</h4>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue'
  
  import { Doughnut } from 'vue-chartjs'
  import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  Plugin
} from 'chart.js'

import services from '@/services'
import useStore from '@/hooks/useStore'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)  
 
  export default defineComponent({
    name: 'EthnicityChart',
    components: {
        Doughnut
    },
    data: () => ({
      loaded: false,
      error: false,
      chartData: {
          labels: null,
          datasets: [
            {
              label: 'Quantidade',
              backgroundColor: ['#9BDB52', '#F2F2F2', '#F2F2F2', '#F2F2F2'],
              data: null,
            }
          ]
      }
    }),
    setup() {
      const store = useStore();
      let currentRole = computed(function () {
        return store.Role.currentRole;
      });
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      }
      return {
        currentRole,
        chartOptions
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
  
      try {
        const { data } = await services.dataCandidates.characteristic(2018, this.currentRole, 'ethnicity')
        this.chartData.labels = data.map(i =>  i.characteristic.charAt(0).toUpperCase() + i.characteristic.slice(1))
        this.chartData.datasets[0].data = data.map(i =>  i.total)
  
        this.loaded = true
      } catch (e) {
        this.error = true;
      }
    }
  })
  </script>
  