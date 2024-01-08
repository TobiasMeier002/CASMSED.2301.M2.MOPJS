<template>
  <div class="window">
    <h1>Welcome to MOPJ</h1>
    <InputForm />
    <GetWeather />
  </div>
</template>

<script>
import GetWeather from './components/GetWeather.vue'
import InputForm from './components/InputForm.vue'

export default {
  name: 'App',
  components: {
    GetWeather, InputForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #eee;
}
.window {
    max-width: 420px;
    margin-left:auto;
    margin-right:auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
}
h1 {
  color: #555;
}
</style>
