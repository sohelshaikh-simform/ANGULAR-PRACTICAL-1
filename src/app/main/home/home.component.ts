import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userInput!: string;
  camelCaseString: string = '';

  onClick() {
    this.camelCaseString = _.camelCase(this.userInput);
    console.log(this.camelCaseString);
  }
}
