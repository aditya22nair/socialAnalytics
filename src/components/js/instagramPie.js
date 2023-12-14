import { onBeforeMount, reactive, ref, watch } from "vue";

export default {
  name: "InstagramPie",
  components: {},
  setup() {
    const categoryData = ref({});
    const keysArray = ref([]);
    const valuesArray = ref([]);
    const showChart = ref(false);

    onBeforeMount(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://10.20.3.173:8090/logging/eventCountByServiceApp/instagram"
          );
          const data = await response.json();
          categoryData.value = data;
          keysArray.value = Object.keys(categoryData.value);
          valuesArray.value = Object.values(categoryData.value);
          showChart.value = true;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    });

    //console.log("InstagramPie", keysArray.value, valuesArray.value);
    const options = reactive({
      chart: {
        id: "vuechart-example",
        type: "pie", // Set chart type to pie
      },
      labels: keysArray.value, // Set labels for pie chart slices
    });

    const series = ref(valuesArray.value);

    // Watch for changes in keysArray and update labels accordingly
    watch(keysArray, (newKeys) => {
      options.labels = newKeys;
    });

    // Watch for changes in valuesArray and update series accordingly
    watch(valuesArray, (newValues) => {
      series.value = newValues;
    });

    return {
      options,
      series,
      categoryData,
      keysArray,
      showChart,
      valuesArray,
    };
  },
};
