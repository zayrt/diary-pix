import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PagesService} from "../pages.services";
import {SpinnerService} from "angular-spinners";
import {ToastsManager} from "ng2-toastr";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private pageService: PagesService, private spinnerService: SpinnerService,
              public toastr: ToastsManager) {
    this.signinForm = this.buildForm();
  }

  login() {
    const data = {
      email: this.signinForm.controls.email.value,
      password: this.signinForm.controls.password.value
    };
    this.spinnerService.show('loader');
    this.pageService.signin(data).subscribe(
      res => {
        this.spinnerService.hide('loader');
        this.toastr.success('Connexion réussi !', null, {toastLife: 10000});
      },
      error => {
        let err = JSON.parse(error._body).error;
        this.toastr.error(err, null, {toastLife: 10000});
        this.spinnerService.hide('loader');
      },
      () => {
      }
    );
  }

  buildForm() {
    return this.fb.group({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }
}
