<template>
    <div class="facebook">
      <apexchart
        class="facebookBar"
        v-if="showChart"
        width="500"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
      <FacebookPie />
      <FacebookLine />
    </div>
  </template>
  
  <script src="../components/js/facebookPage.js"></script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .facebook {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  
  .facebookBar {
    background-color: white;
    border-radius: 15px;
  }
  
  h1 {
    color: white;
  }
  </style>
  