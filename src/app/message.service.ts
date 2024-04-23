import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messagesInfo: string[] = [];

  constructor() { }

  addInfo(msgVal: string) {
    this.messagesInfo.push(msgVal);
  }

  clear() {
    this.messagesInfo = [];
  }
}
