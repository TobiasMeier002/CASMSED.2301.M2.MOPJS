<template>
  <h1>Weather</h1>
    <div v-show="showGetCurrentWeather">
      <label>Current Temperature</label>
      <input v-model="this.currentTemperature" readonly="readonly">
      <label>Current Rain</label>
      <input v-model="this.currentRain" readonly="readonly">
      <label>Current Wind</label>
      <input v-model="this.currentWind" readonly="readonly">
    </div>
    <div v-show="showGetWeather">
      <label>Forecast Temperature</label>
      <input v-model="this.temperature" readonly="readonly">
      <label>Forecast Rain</label>
      <input v-model="this.rain" readonly="readonly">
      <label>Forecast Wind</label>
      <input v-model="this.wind" readonly="readonly">
    </div>   
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      weatherResponse: [],
      currentTemperature: null,
      temperature: null,
      placeLongitude: null,
      placeLatitude: null,
      date: null,
      currentRain: null,
      rain: null,
      currentWind: null,
      wind: null
    }
  },
  methods: {
    getCurrentTemperature() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&current=temperature_2m')
        .then((response) => {
          this.weatherResponse = response.data
          this.currentTemperature = this.weatherResponse.current.temperature_2m + ' °C'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getTemperature() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&hourly=temperature_2m')
        .then((response) => {
          this.weatherResponse = response.data
          this.temperature = this.weatherResponse.hourly.temperature_2m[this.weatherResponse.hourly.time.indexOf(this.date + 'T12:00')] + ' °C'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getCurrentRain() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&current=rain')
        .then((response) => {
          this.weatherResponse = response.data
          this.currentRain = this.weatherResponse.current.rain + ' mm'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getRain() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&hourly=rain')
        .then((response) => {
          this.weatherResponse = response.data
          this.rain = this.weatherResponse.hourly.rain[this.weatherResponse.hourly.time.indexOf(this.date + 'T12:00')] + ' mm'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getCurrentWind() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&current=wind_speed_10m')
        .then((response) => {
          this.weatherResponse = response.data
          this.currentWind = this.weatherResponse.current.wind_speed_10m + ' km/h'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getWind() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&hourly=wind_speed_10m')
        .then((response) => {
          this.weatherResponse = response.data
          this.wind = this.weatherResponse.hourly.wind_speed_10m[this.weatherResponse.hourly.time.indexOf(this.date + 'T12:00')] + ' km/h'
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.emitter.on("emitLatitude", (data) => {
        this.placeLatitude = data.msg
    }),
    this.emitter.on("emitLongitude", (data) => {
        this.placeLongitude = data.msg
    }),
    this.emitter.on("emitDate", (data) => {
        this.date = data.msg
    })
  },
  computed: {
    showGetCurrentWeather: function() {
      if (this.placeLatitude && this.placeLongitude) {
            this.getCurrentTemperature()
            this.getCurrentRain()
            this.getCurrentWind()
            return true
        } else {
            return false
        }
    },
    showGetWeather: function() {
        if (this.placeLatitude && this.placeLongitude && this.date) {
            this.getTemperature()
            this.getRain()
            this.getWind()
            return true
        } else {
            return false
        }
    }
  }
}
</script>

<style>
.pill {
    display: inline-block;
    width: 100%;
    margin: 20px 10px 0;
    padding: 10px 6px;
    background: rgba(137, 43, 226, 0.661);
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: white;
    cursor: pointer;
}
h3 {
    color: blueviolet;
}
</style>