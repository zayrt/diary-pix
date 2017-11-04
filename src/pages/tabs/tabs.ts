import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import {PagesService} from "../pages.services";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = RegisterPage;

  constructor(private pageService: PagesService) {}

}
