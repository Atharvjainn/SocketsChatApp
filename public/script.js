var socket = io()

socket.on('from_server',() => {
    console.log("event collected from the server");
    const div = document.createElement('div')
    div.innerText = "New Event"
    document.body.appendChild(div)
})