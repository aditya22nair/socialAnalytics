import { onBeforeMount, reactive, ref, watch } from "vue";

export default {
  name: "FacebookLine",
  components: {},
  setup() {
    console.log("facel");

    const categoryData = ref({});
    const keysArray = ref([]);
    const valuesArray = ref([]);
    // const key = ref(Date.now());

    const showChart = ref(false);

    onBeforeMount(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://10.20.3.173:8090/logging/eventCountByServiceApp/facebook"
          );
          const data = await response.json();
          categoryData.value = data;
          console.log(categoryData.value);

          keysArray.value = Object.keys(categoryData.value);
          valuesArray.value = Object.values(categoryData.value);

          console.log(keysArray.value, valuesArray.value);
          showChart.value = true;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    });

    console.log("he", keysArray.value, valuesArray.value);
    const options = reactive({
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: keysArray.value,
        title: {
          text: "Event type", // Change this to your desired X-axis label
        },
      },
    });

    const series = ref([
      {
        name: "series-1",
        data: valuesArray.value,
      },
    ]);

    watch(keysArray, (newKeys) => {
      console.log("watch", newKeys);
      options.xaxis.categories = newKeys;
      // key.value = Date.now();
      console.log("watch2", options.xaxis.categories);
    });

    // Watch for changes in valuesArray and update series accordingly
    watch(valuesArray, (newValues) => {
      series.value[0].data = newValues;
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