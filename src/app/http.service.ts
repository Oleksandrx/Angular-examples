import { Injectable } from '@angular/core';

@Injectable()

export class HttpService {

  consoleText(text) {
    console.log(text);
  }

  constructor() { }

}
