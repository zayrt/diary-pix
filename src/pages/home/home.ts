import {Component} from '@angular/core';
import {PagesService} from "../pages.services";
import {SpinnerService} from "angular-spinners";
import {NavController} from "ionic-angular";
import {Picture} from "../picture.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pictures: Picture[];

  constructor(private pageService: PagesService, private spinnerService: SpinnerService, public nav: NavController) {}

  ionViewDidEnter() {
    this.getPictures();
  }

  getPictures() {
    if (this.pageService.user) {
      this.spinnerService.show('loader');
      this.pageService.getPictures().subscribe(
        res => {
          this.spinnerService.hide('loader');
          this.pictures = res.contents;
        }
      );
    }
  }
}
