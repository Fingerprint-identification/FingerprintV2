import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }
  commingMessage(msg: any): any{
    return msg;
  }
}
