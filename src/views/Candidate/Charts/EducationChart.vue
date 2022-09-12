<template>
    <div class="container">
      <Bar v-if="loaded" :styles="stylesBar" :chart-options="chartOptions" :chart-data="chartData" />
      <div v-if="loaded && error">
        <h4>Não foi possível carregar os dados</h4>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue'
  
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  import services from '@/services'
  import useStore from '@/hooks/useStore'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default defineComponent({
    name: 'EducationChart',
    components: {
      Bar
    },
    data: () => ({
      loaded: false,
      error: false,
      dataAge: null,
      chartData: {
          labels: ['Superior Completo', 'Ensino Médio Completo', 'Superior Incompleto', 'Ensino Fundamental Completo', 'Ensino Médio Incompleto'],
          datasets: [
            {
              label: 'Quantidade',
              backgroundColor: '#f2f2f2',
              data: null,
              borderRadius: "50%",
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
        indexAxis: 'y',
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
        const { data } = await services.dataCandidates.characteristic(2018, this.currentRole, 'education')
        this.chartData.datasets[0].data = data.map(i =>  i.total)
  
        this.loaded = true
      } catch (e) {
        this.error = true;
      }
    }
  })
  </script>
  