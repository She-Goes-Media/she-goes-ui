import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome', content:'add content...', image: 'assets/'},
    'about': {},
    'contact': {},
    'portfolio': {}
  }

  constructor() { }
}
