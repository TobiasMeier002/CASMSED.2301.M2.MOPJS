class myDate extends HTMLElement {
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
        let labelDate = document.createElement('label');
        labelDate.innerText = 'Date';
        input.appendChild(labelDate);
        let myDate = document.createElement("input");
        myDate.setAttribute('type', 'date');
        myDate.setAttribute('id', 'Date');
        myDate.addEventListener("input", this.handleInput);
        input.appendChild(myDate);
        
        
        this.shadowRoot.append(input);
    }

    async handleInput (e) {
        if (e) {
            console.log(e)
            var message = {name : e.target.id, value : e.target.value}
            console.log(e.target.value)
            await channel.send(message)
        }
    }
}

// Define the new element
customElements.define('date-input', myDate);