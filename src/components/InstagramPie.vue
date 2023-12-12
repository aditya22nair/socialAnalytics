<template>
  <div>
    <apexchart
      class="instagramPie"
      v-if="showChart"
      width="480"
      type="pie"
      :options="options"
      :series="series"
    >
    </apexchart>
  </div>
</template>

<script src="@/components/js/instagramPie.js"></script>

<style scoped>
.instagramPie {
  background-color: white;

  border-radius: 15px;
}


</style>
