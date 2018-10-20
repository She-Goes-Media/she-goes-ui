import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'She Goes Media';

  constructor() {}

  ngOnInit() {}

}
