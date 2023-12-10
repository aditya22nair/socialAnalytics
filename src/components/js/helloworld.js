import { ref } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    console.log("l");

        const options = ref({
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        });
    
        const series = ref([{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]);
    
        return {
          options,
          series
        };
  },
};
