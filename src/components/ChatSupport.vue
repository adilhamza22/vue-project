<template>
    <div class="main-container">
        <h1>CHAT X</h1>
        <span v-if="connectionReady">ConnectionReady</span>
        <span v-if="connectionError">ConnectionError</span>

        <div class="messages-container">
            <div class="sender-msg-container row" v-for="m in messages.filter(item => item.sid == 0)" > <div class="sender-msg">{{ m.msg }} </div> </div>
            <div class="bot-msg-container row" v-for="m in messages.filter(item => item.sid == 1)">  <div class="bot-msg">{{ m.msg }} </div> </div>

        </div>
        <div class="input-msg-container ">
            <input v-model="newMessage" type="text" placeholder="Ask Expert?" />
            <button v-on:click="sendMsg()">Send</button>
        </div>

        <!-- <h1>Chat X<span class="connection_ready" v-if="connection_ready">Connection ready!</span></h1>
        
        <div class="messages" id="messages">
          <div class="message-container">
            <h1 class="error" v-if="connection_error"> Connection error! </h1>
            <div v-for="(m,idx) in messages" :key="'m-' + idx" style="clear:both">
              <div :class="{ 'msg-from-me' : m.from=='me', 'msg-from-other' : m.from=='other'}">
                {{m.message}}
              </div>
            </div> 
          </div>
        </div>
  
        <div class="send-zone">
          <input v-model="new_message" type="text" placeholder="Type a message" @keyup.enter="send_message"/>
        </div> -->
    </div>
</template>

<script>
// const WebSocket = require('ws');
// import WebSocket from 'ws';
// const WebSocket = new WebSocket("wss://socketsbay.com/wss/v2/100/c4330f660a99a1ce55ea9ab3f11c1ac6/");
// const WebSocket = new WebSocket();
export default {
    data() {
        return {
            //    connection: null,
            socketsBayApiKey: "c4330f660a99a1ce55ea9ab3f11c1ac6",
            connectionReady: false,
            connectionError: false,
            nickname: "",
            webSocket: null,
            newMessage: "",
            messages:[],
            // messages: [{sid:0, msg:"Hello"},{sid:1, msg:"Hi"},{sid:0, msg:"How are you?"},{sid:1, msg:"I am fine, thank you!"},{sid:0, msg:"What is your name?"},{sid:1, msg:"My name is ChatX"}],  
        }
    },
    methods: {
        inititalizeChat(){
            console.log("inititalizeChat");
             //connect to Sockets Bay
            let webSocket = new WebSocket("wss://socketsbay.com/wss/v2/100/c4330f660a99a1ce55ea9ab3f11c1ac6/");
            // var sockets_bay_url = `wss://socketsbay.com/wss/v2/100/${this.socketsBayApiKey}/`;
            // webSocket = new WebSocket(sockets_bay_url);
            // webSocket = WebSocket;
            this.webSocket = webSocket;
            webSocket.onopen = this.onSocketOpen;
            webSocket.onmessage = this.onSocketMessage;
            webSocket.onerror = this.onSocketError;
        },
        onSocketOpen(event){
            this.connectionReady=true;
            console.log("Connection ready!");
        },
        onSocketMessage(event){
            var receivedData = JSON.parse(event.data);
            console.log(receivedData);
            this.messages.push({sid:1, msg:receivedData});

        },
        onSocketError(){
            this.connectionError =true;
        },
        sendMsg(){
            debugger
            this.webSocket.send(JSON.stringify(this.newMessage));
            this.messages.push({sid:0, msg:this.newMessage});
            this.newMessage = "";
        }
    },
    mounted(){
        console.log("mounted");
        this.inititalizeChat();
    },
    created() {
        console.log("created");
        // this.connection = new WebSocket(this.socketsBayApiKey);
        // this.connection.onopen = () => {
        //     this.connectionReady = true;
        //     this.connectionError = false;
        //     console.log("Connection ready!");
        // }
    },
}
</script>

<style scoped>
.messages-container {
    /* max-height: max-content;
    background: url("../assets/background.jpg"); */
    /* height: 70vh; */
    overflow-y: hidden;
    overflow-x: hidden;
}

h1 {
    text-align: center;
    color: rgb(27, 110, 27)
}

.main-container {
    color: black;
    font-size: small;
    font-family: monospace;
    /* background-size: cover; */
}

.sender-msg-container {
   
 
    /* width: 50%; */
    float: right;
    width:100%;
    display: block;
}
.sender-msg{
    text-align: end;
    background-color: #2dbd2d;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    width: fit-content;
    float: right;
}
.bot-msg-container {
    /* text-align: start;
    background-color: #a3a7a3;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 10px; */
    width:100%;
    float: left;
    display: block;

}
.bot-msg{
    text-align: end;
    background-color: #a3a7a3;
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    width: fit-content;
    float: left;
}
.input-msg-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.input-msg-container input {
    width: 100%;
    height: 30px;
    border: 1px solid green;
    border-radius: 5px;
}


.input-msg-container input::placeholder {
    font-size: small;
    font-family: monospace;
}

.input-msg-container button {
    background-color: #2dbd2d;
    color: white;
    border-radius: 10px;
    margin: 10px;
    border: none;
}</style>