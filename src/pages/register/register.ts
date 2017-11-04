import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PagesService} from "../pages.services";
import {SpinnerService} from "angular-spinners";
import {ToastsManager} from "ng2-toastr";
import {ImagePicker} from "@ionic-native/image-picker";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  signupForm: FormGroup;
  fileName: string = "";
  filePath: string = "";

  constructor(private fb: FormBuilder, private pageService: PagesService, private spinnerService: SpinnerService,
              public toastr: ToastsManager, private imagePicker: ImagePicker) {
    this.signupForm = this.buildForm();
  }

  register() {
    const data = {
      firstname: this.signupForm.controls.firstname.value,
      lastname: this.signupForm.controls.lastname.value,
      username: this.signupForm.controls.username.value,
      email: this.signupForm.controls.email.value,
      password: this.signupForm.controls.password.value,
      password_confirmation: this.signupForm.controls.password_confirmation.value
    };
    this.spinnerService.show('loader');
    this.pageService.signup(data).subscribe(
      res => {
        this.spinnerService.hide('loader');
        this.toastr.success('Inscription réussi !', null, {toastLife: 10000});
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

  fileChange() {
    var options = { maximumImagesCount: 1 };

    this.imagePicker.getPictures(options).then((results) => {
      this.filePath = results[0];
      console.log(this.filePath);
      console.log('HISSS')
    }, (err) => {
      console.log(err);
    });
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
