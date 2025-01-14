import { defineComponent, ref, h, onMounted, PropType } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Plugin,
  ChartData,
} from "chart.js";
import services from "@/services";
import { computed } from "@vue/reactivity";
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
  name: "ReactiveChart",
  components: {
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object as PropType<Partial<CSSStyleDeclaration>>,
      default: () => {},
    },
    plugins: {
      type: Array as PropType<Plugin<"bar">[]>,
      default: () => [],
    },
  },
  setup(props) {
    const chartData = ref<ChartData<"bar">>({
      datasets: [],
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    const store = useStore();
    const currentRole = computed(function () {
      return store.Role.currentRole;
    });

    function fillData() {
      const updatedChartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f2f2f2",
            data: [getAge()],
          },
        ],
      };
    }

    async function getAge() {
      try {
        const { data } = await services.dataCandidates.characteristic(
          2022,
          currentRole,
          "age"
        );
        return data;
      } catch (e) {
        return console.error(e);
      }
    }

    onMounted(() => {
      setInterval(() => {
        fillData();
      }, 5000);
    });

    return () =>
      h(Bar, {
        chartData: chartData.value,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      });
  },
});
