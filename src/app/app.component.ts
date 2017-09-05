import { Component } from '@angular/core';

import { ChatService } from './chat/chat.service';

export class User {
  id: number;
  name: string;
}

export class Message {
  type: string;
  action: string;
  user: string;
  text: string;
  timestamp: string ;
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
  providers: [ChatService]
})
export class AppComponent {

  title = 'app';

  users = USERS;

  connectedUsers = [];
  messages = [];
  message = {
    "type": "",
    "action": "",
    "user": "",
    "text": "",
    "timestamp": ""
  };
  areTyping = [];

  constructor(private chatService: ChatService) { }
}
