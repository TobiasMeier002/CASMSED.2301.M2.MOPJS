<template>
    <p v-if="placeLatitude">Latitude is currently set to: {{ placeLatitude }}</p>
    <p v-else> Latitude is currently not set </p>
    <p v-if="placeLongitude">Longitude is currently set to: {{ placeLongitude }}</p>
    <p v-else> Longitude is currently not set </p>
    <p v-if="date">Date is currently set to: {{ date }}</p>
    <p v-else> Date is currently not set </p>
    <p v-if="time">Time is currently set to: {{ time }}</p>
    <p v-else> Time is currently not set </p>
    <div v-show="showGetCurrentTemperature">
        <button class="pill" @click="getCurrentTemperature">Get Current Temperature</button>
    </div>
    <h3 v-if="this.currentTemperature"> The Current Temperature is {{ this.currentTemperature }} °C</h3>
    <div v-show="showGetTemperature">
        <button class="pill" @click="getTemperature(this.date, this.time)">Get Temperature for Selected Date</button>
    </div>
    <h3 v-if="this.temperature"> The Temperature for the selected date-time is {{ this.temperature }} °C</h3>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      temperatureResponse: [],
      currentTemperature: null,
      temperature: null,
      placeLongitude: null,
      placeLatitude: null,
      date: null,
      time: null,
      timeIndex: null,
      temperatureIndex: null
    }
  },
  methods: {
    getCurrentTemperature() {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&current=temperature_2m')
        .then((response) => {
          this.temperatureResponse = response.data
          this.currentTemperature = this.temperatureResponse.current.temperature_2m
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getTemperature(date, time) {
      axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + this.placeLatitude + '&longitude=' + this.placeLongitude +'&hourly=temperature_2m')
        .then((response) => {
          this.temperatureResponse = response.data
          this.temperature = this.temperatureResponse.hourly.temperature_2m[this.temperatureResponse.hourly.time.indexOf(date + 'T' + time.split(":")[0] + ':00')]
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
    }),
    this.emitter.on("emitTime", (data) => {
        this.time = data.msg
    })
  },
  computed: {
    showGetCurrentTemperature: function() {
        if (this.placeLatitude && this.placeLongitude) {
            return true
        } else {
            return false
        }
    },
    showGetTemperature: function() {
        if (this.placeLatitude && this.placeLongitude && this.date && this.time) {
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