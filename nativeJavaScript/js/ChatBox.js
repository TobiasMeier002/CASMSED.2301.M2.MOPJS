class ChatBox extends HTMLElement 
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
        console.log("ChatBox message added")
    }
    handleMessage(messageObject)
    {
        console.log("ChatBox text message handled", messageObject)
        this.addMessage(messageObject.name + messageObject.value)
    }

 
}

// Define the new element
customElements.define('chat-box', ChatBox);