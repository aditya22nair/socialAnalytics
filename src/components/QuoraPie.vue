<template>
    <div>
      <apexchart
        class="quoraPie"
        v-if="showChart"
        width="480"
        type="pie"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
  <script src="@/components/js/quoraPie.js"></script>
  
  <style scoped>
  .quoraPie {
    background-color: white;
    
    border-radius: 15px;
  }
  </style>
  