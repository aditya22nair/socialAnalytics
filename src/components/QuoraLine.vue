<template>
    <div>
      <apexchart
        class="quoraLine"
        v-if="showChart"
        width="700"
        height="300"
        type="line"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
  <script src="@/components/js/quoraLine.js"></script>
  
  <style scoped>
  .quoraLine {
    background-color: white;
    border-radius: 15px;
    margin-top: 4%;
  }
  </style>
  