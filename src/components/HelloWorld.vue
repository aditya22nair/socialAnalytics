<template>
  <!-- <div class="comp-title">User Info</div> -->
  <div class="global">
    <div class="roww">
      <div class="card" @click="routeMe('/instagram')">
        <h2>Instagram</h2>
        <div>
          <img :src="userIcon" class="user-icon" />{{ userData.instagram }}
        </div>
      </div>
      <div class="card" @click="routeMe('/facebook')">
        <h2>Facebook</h2>
        <div>
          <img :src="userIcon" class="user-icon" />{{ userData.facebook }}
        </div>
      </div>
      <div class="card" @click="routeMe('/quora')">
        <h2>Quora</h2>
        <div><img :src="userIcon" class="user-icon" />{{ userData.quora }}</div>
        <!-- <p>9</p>   -->
      </div>
      <div class="card" @click="routeMe('/')">
        <h2>Total</h2>
        <div><img :src="userIcon" class="user-icon" />{{ totalUser }}</div>
        <!-- <p>9</p>   -->
      </div>
    </div>
    <div class="comp-title">Trending Categories</div>
    <apexchart
      class="globalBar"
      v-if="showChart"
      width="700"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
    <!-- <FacebookPie /> -->
    <!-- <FacebookLine /> -->
  </div>
</template>

<script src="../components/js/helloworld.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.global {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

body {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f5f5f5;
}
.card {
  display: flex;
  background-color: lightcyan;
  border-radius: 8px;
  height: 20%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

h2 {
  margin: 0 0.5rem;
  color: #333;
}
p {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #009688;
}

.globalBar {
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: auto;
}

h1 {
  color: white;
}
.roww {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 4 rem;
}
.global {
  display: flex;
  flex-direction: column;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
}
.card div {
  font-size: 1.5rem;
  margin-right: 15px;
}
.comp-title {
  font-size: 1.8rem;
  color: white;
  margin: 2rem;
}
.user-icon {
  width: 1.3rem;
  background-color: lightcyan;
  margin: 0 0.5rem;
}
</style>
