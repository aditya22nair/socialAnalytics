<template>
    <div class="quora">
      <apexchart
        class="quoraBar"
        v-if="showChart"
        width="500"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
      <QuoraPie />
      <QuoraLine />
    </div>
  </template>
  
  <script src="../components/js/quoraPage.js"></script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .quora {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  
  .quoraBar {
    background-color: white;
    border-radius: 15px;
  }
  
  h1 {
    color: white;
  }
  </style>
  