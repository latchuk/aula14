import { Injectable } from '@angular/core';
import { Exemplo } from './exemplo.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  nomes: Exemplo[] = [];

  constructor() { }

}
