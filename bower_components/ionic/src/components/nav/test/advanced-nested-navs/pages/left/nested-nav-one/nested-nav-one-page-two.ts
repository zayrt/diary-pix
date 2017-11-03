import { Component } from '@angular/core';
import { IonicPage, NavController, } from '../../../../../../..';

@IonicPage()
@Component({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `
})
export class NestedNavOnePageTwo {

  root: string = 'FirstPage';
  constructor(public nav: NavController) {
  }
}
