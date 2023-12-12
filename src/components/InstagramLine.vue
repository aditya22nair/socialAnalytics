<template>
    <div>
      <apexchart
        class="instagramLine"
        v-if="showChart"
        width="700"
        height="300"
        type="line"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </template>
  
  <script src="@/components/js/instagramLine.js"></script>
  
  <style scoped>
  .instagramLine {
    background-color: white;
    border-radius: 15px;
    margin-top: 4%;
  }
  </style>
  