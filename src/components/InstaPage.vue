<template>
  <div class="instagram">
    <apexchart
      class="instagramBar"
      v-if="showChart"
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
    <InstagramPie />
    <InstagramLine />
  </div>
</template>

<script src="../components/js/instaPage.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.instagram {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.instagramBar {
  background-color: white;
  border-radius: 15px;
}

h1 {
  color: white;
}
</style>
