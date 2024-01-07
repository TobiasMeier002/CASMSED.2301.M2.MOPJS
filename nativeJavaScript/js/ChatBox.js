class ChatBox extends HTMLDivElement 
{
    constructor() 
    {
        super();

        // Create a shadow root
        this.attachShadow({mode: 'open'});                
    }

    addMessage(messageText)
    {
        let textElement = document.createElement("p");
        textElement.innerText = messageText
        this.shadowRoot.append(textElement)
        console.log("ChatBox message added", messageText)
    }

    handleTextMessage(messageText)
    {
        console.log("ChatBox text message handled", messageText)
        this.addMessage(messageText)
    }

    handleMessageOld(messageObject)
    {
        if(messageObject.target === this.getAttribute("name"))
        {
            console.log("ChatBox text message handled", messageObject)
            this.addMessage(messageObject.message)
        }
        else 
        {
            console.log("ChatBox text message could NOT be handled", messageObject)
        }
    }

    handleMessage(messageObject)
    {
        if(messageObject.latitude && messageObject.longitude && messageObject.date && messageObject.time) {
            this.addMessage('https://api.open-meteo.com/v1/forecast?latitude=' + messageObject.latitude + '&longitude=' + messageObject.longitude +'&hourly=temperature_2m')
        }
        else if(messageObject.latitude && messageObject.longitude) {
            this.addMessage('https://api.open-meteo.com/v1/forecast?latitude=' + messageObject.latitude + '&longitude=' + messageObject.longitude +'&current=temperature_2m')
        }
    }
}

// Define the new element
customElements.define('chat-box', ChatBox, { extends: 'div' });