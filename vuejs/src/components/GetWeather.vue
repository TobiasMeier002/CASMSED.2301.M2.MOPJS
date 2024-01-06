<template>
    <p v-if="placeLatitude">Latitude is currently set to: {{ placeLatitude }}</p>
    <p v-else> Latitude is currently not set </p>
    <p v-if="placeLongitude">Longitude is currently set to: {{ placeLongitude }}</p>
    <p v-else> Longitude is currently not set </p>
    <div v-show="showGetTemperature">
        <button class="pill" @click="getTemperature">Get Temperature</button>
    </div>

    <h3 v-if="this.currentTemperature"> The Temperature is {{ this.currentTemperature }} °C</h3>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      temperatureResponse: [],
      currentTemperature: null,
      placeLongitude: null,
      placeLatitude: null,
    }
  },
  methods: {
    getTemperature() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&current=temperature_2m')
        .then((response) => {
          this.temperatureResponse = response.data
          this.currentTemperature = this.temperatureResponse.current.temperature_2m
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
    })
  },
  computed: {
    showGetTemperature: function() {
        if (this.placeLatitude && this.placeLongitude) {
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