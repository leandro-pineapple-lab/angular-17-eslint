import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  constructor() { }

  calc(a: number, b: number) {
    return a + b;
  }
}
