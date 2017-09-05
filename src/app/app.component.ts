import { Component, OnInit } from '@angular/core';


import * as io from 'socket.io-client';

// import { ChatService } from './chat/chat.service';

export class User {
  id: number;
  name: string;
}

export class Message {
  type: string;
  action: string;
  user: string;
  text: string;
  timestamp: string;
}


const USERS: User[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {


  title = 'app';

  users = USERS;

  connectedUsers = [];
  messages = [];
  message: Message; /* {
    "type": "",
    "action": "",
    "user": "",
    "text": "",
    "timestamp": ""
  }; */
  messageText = '';
  areTyping = [];

  socket: SocketIOClient.Socket;



  constructor() {
    this.socket = io.connect('http://localhost:8000');
    this.message = new Message();
    this.message.text = '';
  }

  ngOnInit() {
    const socket = this.socket;

    // if server emit 'user joined', update connectedUsers array
    socket.on('user joined', function (data) {
      // data is socket-id
      let socketId = data;
      /*
      // get already connected user firstly
      axios.get('/onlineusers')
        .then(function (response) {
          for (var key in response.data) {
            if (this.connectedUsers.indexOf(key) <= -1) {
              this.connectedUsers.push(key);
            }
          }
        }.bind(this));
        */

      let infoMsg = {
        type: 'info',
        msg: 'User ' + socketId + ' has joined '
      };
      this.messages.push(infoMsg);


      this.connectedUsers.push(socketId);
    }.bind(this));

    // if server emits 'chat.message', update the message array
    socket.on('chat.message', function (message) {
      this.messages.push(message);
    }.bind(this));

    // server emits 'user typing'
    socket.on('user typing', function (username) {
      this.areTyping.push(username);
    }.bind(this));

    // server emits 'stopped typing'
    socket.on('stopped typing', function (username) {

      let index = this.areTyping.indexOf(username);
      if (index >= 0) {
        this.areTyping.splice(index, 1);
      }
    }.bind(this));

    // if server broadcasts 'user left', remove leaving user from connectedUsers array
    socket.on('user left', function (socketId) {
      let index = this.connectedUsers.indexOf(socketId);
      // console.log(index);
      if (index >= 0) {
        this.connectedUsers.splice(index, 1);
      }
      let infoMsg = {
        type: 'info',
        'msg': 'User ' + socketId + ' has left '
      };
      this.messages.push(infoMsg);

    }.bind(this));
  }

  send() {
    let socket = this.socket;

    this.message.type = 'chat';
    this.message.user = socket.id;

    this.message.timestamp = 'today';
    // this.message.timestamp = moment().calendar();

    socket.emit('chat.message', this.message);
    this.message.type = '';
    this.message.user = '';
    this.message.text = '';
    this.message.timestamp = '';
  }
}
