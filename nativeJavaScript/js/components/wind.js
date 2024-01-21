class wind extends HTMLElement {
    constructor() 
    {
        super();

        // Create a shadow root
        this.attachShadow({mode: 'open'}); 

        let style = document.createElement("style");
        style.innerHTML = `
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
        }`

        this.shadowRoot.append(style);
        let wind = document.createElement("div");
        let label = document.createElement("label")
        label.innerText = "Wind"
        wind.append(label)
        let input = document.createElement("input")
        input.setAttribute("readonly",true) 
        input.setAttribute("id", "wind")   
        input.value = '--km/h'
        wind.append(input)
        this.shadowRoot.append(wind);
    }

    longitude;
    latitude;
    myDate;

    handleMessage(messageObject)
    {
        console.log("wind message handled", messageObject)
        if (messageObject.name == 'Longitude') {
            this.longitude = messageObject.value;
        }
        if (messageObject.name == 'Latitude') {
            this.latitude = messageObject.value;
        }
        if (messageObject.name == 'Date') {
            this.myDate = messageObject.value;
        }
        if (this.latitude && this.longitude && this.myDate) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude +'&hourly=wind_speed_10m').then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                response.json().then( r => this.shadowRoot.getElementById('wind').value = r.hourly.wind_speed_10m[r.hourly.time.indexOf(this.myDate + 'T12:00')] + ' km/h')
              })
              .then(data => {
                console.log(data);
              })
              .catch(error => {
                console.error('Error:', error);
              });
        } else if (this.latitude && this.longitude) {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.latitude + '&longitude=' + this.longitude +'&current=wind_speed_10m').then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                response.json().then( r => this.shadowRoot.getElementById('wind').value = r.current.wind_speed_10m + ' km/h')
              })
              .then(data => {
                console.log(data);
              })
              .catch(error => {
                console.error('Error:', error);
              });
        }
    }
}

// Define the new element
customElements.define('wind-display', wind);