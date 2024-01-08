class PubSubChannel 
{
    constructor()
    {
        this.messages = []
        this.receivers = []
        this.sender = undefined
        console.log("PubSubChannel created")
    }

    subscribe(receiver)
    {
        this.receivers.push(receiver)
        console.log("PubSubChannel subscribed")
    }

    async send(message) 
    {
        this.messages.push(message)
        console.log("PubSubChannel message pushed")
        this.handleReceive()
    }

    async handleReceive()
    {
        if(this.messages.length > 0 && this.receivers.length > 0)
        {
            this.receive()
        }
    }

    async receive()
    {
        var message = this.messages.pop()

        this.receivers.forEach(receiver => 
        {
            receiver.handleMessage(message)
        })
    }
}