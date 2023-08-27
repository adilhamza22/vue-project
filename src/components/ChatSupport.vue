<template>
    <div class="main-container">
        <!-- <h1>CHAT X</h1> -->
        <h1><img src="../assets/color-logo- no-bg.svg" height="50px" width="100px"></h1>
        <span v-if="connectionReady">Online</span>
        <span v-if="connectionError">ConnectionError</span>

        <div class="messages-container" id ="messages_container">
            <div class="sender-msg-container row" v-for="m in messages.filter(item => item.sid == 0)" >  <div class="sender-msg">{{ m.msg }} {{ m.timeStamp }} </div> </div>
            <div class="bot-msg-container row" v-for="m in messages.filter(item => item.sid == 1)">  <div class="bot-msg"> {{ m.msg }} {{ m.timeStamp }}  </div> </div>

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

import { io } from "socket.io-client";

export default {
    // devServer: {
    //     proxy: 'https://mainsite.com/',
    // },
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
        async inititalizeChat(){
            console.log("inititalizeChat");
             //connect to Sockets Bay
            // let webSocket = new WebSocket("wss://socketsbay.com/wss/v2/100/c4330f660a99a1ce55ea9ab3f11c1ac6/");
            // let webSocket = new WebSocket("wss://192.168.11.213:3000/");
            // const webSocket = new WebSocket("ws://192.168.11.213:3000");
            // const socket = io("http://192.168.11.213:3000"); // zain server
            let socket = io("http://192.168.11.209:8080"); // muzammil server
            // this.webSocket = socket;
            await this.webSocket.emit("connection", () => {
               this.onSocketOpen();
                // console.log("");
            });     
            await this.webSocket.on("chat message", (msg) => {
                this.onSocketMessage(msg);
                // console.log(msg);
            });
            

            // socket.emit("chat message",{message:"helo zain"});
            // socket.on("chat message", (msg) => {
            //     console.log(msg);
            // });
            // var sockets_bay_url = `wss://socketsbay.com/wss/v2/100/${this.socketsBayApiKey}/`;
            // webSocket = new WebSocket(sockets_bay_url);
            // webSocket = WebSocket;
                // this.webSocket = webSocket;
                // webSocket.onopen = this.onSocketOpen;
                // webSocket.onmessage = this.onSocketMessage;
                // webSocket.onerror = this.onSocketError;
        },
        onSocketOpen(event){
            this.connectionReady=true;
            console.log("Connection ready!");
        },
        onSocketMessage(msg){
            // var receivedData = JSON.parse(event.data);
            // let receivedData;
            // this.webSocket.on("chat message", (msg) => {
                
                console.log(msg);
                // receivedData = msg;
                // console.log(receivedData);
                let date = new Date();
                let timeStamp = date.getHours()+":"+date.getMinutes();
                this.messages.push({sid:1, msg:msg, timeStamp:timeStamp});
                    
            // });
            // console.log(receivedData);
            // let date = new Date();
            // let timeStamp = date.getHours()+":"+date.getMinutes();
            // this.messages.push({sid:1, msg:receivedData, timeStamp:timeStamp});
        },
        onSocketError(){
            this.connectionError =true;
        },
        sendMsg(){
            debugger
            // this.webSocket.send(JSON.stringify(this.newMessage));
            this.webSocket.emit("chat message",this.newMessage);
            let date = new Date();
            let timeStamp = date.getHours()+":"+date.getMinutes();
            this.messages.push({sid:0, msg:this.newMessage, timeStamp:timeStamp});
            //scroll to bottom
            // const messages_div = document.getElementById('messages_container');
            // messages_div.scrollTo({top: messages_div.scrollHeight, behavior: 'smooth'});
            this.newMessage = "";
        }
    },
    created() {
        console.log("created");
        setTimeout(() => {
            this.webSocket = io("http://192.168.11.209:8080"); // muzammil server
            // this.webSocket =io("http://192.168.11.212:3000");//moazamm server
            // this.webSocket =io("192.168.11.208:3000");//zaid 
            this.inititalizeChat();
        }, 3000);
        // this.connection = new WebSocket(this.socketsBayApiKey);
        // this.connection.onopen = () => {
        //     this.connectionReady = true;
        //     this.connectionError = false;
        //     console.log("Connection ready!");
        // }
    },
    mounted(){
        console.log("mounted");
        

    },
}
</script>

<style scoped>
.main-container{
    border-radius: 15px;
    /* margin-top: 45%; */
    /* margin-left: 45%; */
    /* margin-right: 0; */
    height: 100%;
    position: absolute;
    /* position: relative; */
    width: 50%;
    height: 50%;
    /* left:0; */
    bottom:10%;
    right: 2%;
    background-image: url("../assets/background.jpg");
    color: white;
    font-size: small;
    font-family: monospace;
    /* overflow-x: scroll; */
    overflow-y:scroll;

    
}
@media only screen and (max-width:1024px) {
    .main-container{

    }
}
.messages-container {
    /* max-height: max-content;
    background: url("../assets/background.jpg"); */
    /* height: 70vh; */
    /* overflow-x: scroll; */
    /* overflow: scroll; */
    overflow-x: hidden;
    overflow-y: auto;

}

h1 {
    border-top-left-radius: 15px;
    /* border-top-right-radius: 15px; */
    text-align: center;
    background-color: rgb(31, 105, 83,0.8);
    color:whitesmoke;
}

/* .main-container {
 
    
} */

.sender-msg-container {
   
 
    /* width: 50%; */
    float: right;
    width:100%;
    display: block;
    /* margin-right: 1%; */

}
.sender-msg{
    text-align: end;
    /* background-color: #2dbd2d; */
    background-color: rgb(31, 105, 83);

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
    /* margin-left: 1%; */


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
    /* border: 1px solid green; */
    border: 1px solid rgb(31, 105, 83);

    border-radius: 5px;
}


.input-msg-container input::placeholder {
    font-size: small;
    font-family: monospace;
}

.input-msg-container button {
    background-color: #2dbd2d;
    background-color:  rgb(31, 105, 83);
    color: white;
    border-radius: 10px;
    margin: 10px;
    border: none;
}</style>