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
              backgroundColor: '',
              borderRadius: Number.MAX_VALUE,
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
      let currentCandidateSelected = computed(function () {
        return store.Candidates.currentCandidateSelected;
      });
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
      }
      return {
        currentRole,
        chartOptions,
        currentCandidateSelected
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

        this.chartData.datasets[0].backgroundColor = data.map(i =>  i.characteristic == this.currentCandidateSelected.education ? '#9BDB52' : '#D9D9D9')
  
        this.loaded = true
      } catch (e) {
        this.error = true;
      }
    }
  })
  </script>
  