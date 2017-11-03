import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PagesService} from "../pages.services";
import {SpinnerService} from "angular-spinners";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signupForm: FormGroup;
  status = '';
  snack_msg;

  constructor(public navCtrl: NavController, private fb: FormBuilder, private pageService: PagesService, private spinnerService: SpinnerService) {
    this.signupForm = this.buildForm();
  }

  register() {
    const data = {
      firstname: this.signupForm.controls.firstname.value,
      lastname: this.signupForm.controls.lastname.value,
      username: this.signupForm.controls.username.value,
      email: this.signupForm.controls.email.value,
      password: this.signupForm.controls.password.value,
      password_confirmation: this.signupForm.controls.password_confirmation.value,
      avatar: this.signupForm.controls.avatar.value,
    };
    this.spinnerService.show('loader');
    this.pageService.signup(data).subscribe(
      res => {
        this.status = 'success';
        this.snack_msg = 'Inscription réussi !';
      },
      error => {
        let err = JSON.parse(error._body).error;
        this.snack_msg = err;
        this.status = 'error';
        this.spinnerService.hide('loader');
      },
      () => {
      }
    );
  }

  buildForm() {
    return this.fb.group({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      username: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      password_confirmation: new FormControl(null),
      avatar: new FormControl(null)
    });
  }
}
