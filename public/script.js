var socket = io()

let chatmsg = document.getElementById('chatmsg')
let button1 = document.getElementById('button1')
let list = document.getElementById('list')

button1.onclick = function exec(){
    socket.emit('msg_send',{
        msg : chatmsg.value
    })
}


socket.on("msg_rcvd",(data) => {
    let limsg = document.createElement('li')
    limsg.innerText = data.msg
    list.appendChild(limsg)
})






// socket.on('from_server',() => {
//     console.log("event collected from the server");
//     const div = document.createElement('div')
//     div.innerText = "New Event"
//     document.body.appendChild(div)
// })