<template>
        <div>
            <label>Latitude</label>
            <input type="double" required v-model="placeLatitude" placeholder="insert latitude" @keyup="emitLatitude">
        </div>
        <div>
            <label>Longitude</label>
            <input type="double" required v-model="placeLongitude" placeholder="insert longitude" @keyup="emitLongitude">
        </div>
        <div>
            <label>Date</label>
            <input type="date" required v-model="date" @keyup="emitDate" :min="minDate" :max="maxDate">
        </div>
        <div>
            <label>Time</label>
            <input type="time" required v-model="time" @keyup="emitTime">
        </div>

</template>

<script>
export default {
    data() {
        return {
            placeLongitude: null,
            placeLatitude: null,
            date: null,
            time: null,
            minDate: new Date().toISOString().split("T")[0]
        }
    },
    methods: {
        emitLatitude() {
            this.emitter.emit("emitLatitude", { msg: this.placeLatitude })
        },
        emitLongitude() {
            this.emitter.emit('emitLongitude', { msg: this.placeLongitude})
        },
        emitDate() {
            this.emitter.emit('emitDate', { msg: this.date})
        },
        emitTime() {
            this.emitter.emit('emitTime', { msg: this.time})
        }
    },
    computed: {
        maxDate() {
            let myDate = new Date()
            myDate.setDate(myDate.getDate() + 6)
            return myDate.toISOString().split("T")[0]
        }
    }
}
</script>

<style>
label {
    color: #555;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 10x solid #ddd;
    color: #444444;
    border-radius: 20px;
}

</style>