<template>
  <div>
    <apexchart
      class="facebookPie"
      v-if="showChart"
      width="480"
      type="pie"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script src="@/components/js/facebookPie.js"></script>

<style scoped>
.facebookPie {
  background-color: white;
  
  border-radius: 15px;
}
</style>
