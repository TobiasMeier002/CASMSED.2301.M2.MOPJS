<template>
        <div>
            <label>Latitude</label>
            <input type="double" required v-model="placeLatitude" placeholder="insert latitude and press enter" @keyup.enter="emitLatitude">
        </div>
        <div>
            <label>Longitude</label>
            <input type="double" required v-model="placeLongitude" placeholder="insert latitude and press enter" @keyup.enter="emitLongitude">
        </div>

</template>

<script>
export default {
    data() {
        return {
            placeLongitude: null,
            placeLatitude: null,
        }
    },
    methods: {
        emitLatitude() {
            this.emitter.emit("emitLatitude", { msg: this.placeLatitude })
        },
        emitLongitude() {
            this.emitter.emit('emitLongitude', { msg: this.placeLongitude})
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