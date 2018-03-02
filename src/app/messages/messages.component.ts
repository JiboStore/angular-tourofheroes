import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageService property must be public because we are binding it in the template
  // angular only binds to public component properties
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
