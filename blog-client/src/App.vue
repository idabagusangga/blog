<template>
  
    <v-app>
      <v-content>
        <v-container>
          <img src="./assets/logo.png">
          <router-view/>
        </v-container>
      </v-content>
    </v-app>

</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
