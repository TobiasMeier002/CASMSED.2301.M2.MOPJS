class coordinates extends HTMLElement {
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
        let input = document.createElement("div");
        let labelLat = document.createElement('label');
        labelLat.innerText = 'Latitude';
        input.appendChild(labelLat);
        let latitude = document.createElement("input");
        latitude.setAttribute('type', 'double');
        latitude.setAttribute('id', 'Latitude');
        latitude.setAttribute('placeholder', 'Insert Latitude');
        latitude.addEventListener("input", this.handleInput);
        input.appendChild(latitude);

        let labelLon = document.createElement('label');
        labelLon.innerText = 'Longitude';
        input.appendChild(labelLon);
        let longitude = document.createElement("input");
        longitude.setAttribute('type', 'double');
        longitude.setAttribute('id', 'Longitude');
        longitude.setAttribute('placeholder', 'Insert Longitude');
        longitude.addEventListener("input", this.handleInput);
        input.appendChild(longitude);
        
        
        this.shadowRoot.append(input);
    }

    async handleInput (e) {
        if (e.target.value.match(/-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})/)) {
            var message = {name : e.target.id, value : e.target.value}
            await channel.send(message)
        }
    }
}

// Define the new element
customElements.define('coordinates-input', coordinates);