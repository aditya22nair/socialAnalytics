<template>
  <div>
    <apexchart
      class="facebookLine"
      v-if="showChart"
      width="700"
      height="300"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script src="@/components/js/facebookLine.js"></script>

<style scoped>
.facebookLine {
  background-color: white;
  border-radius: 15px;
  margin-top: 4%;
}
</style>
