import { Component } from '@angular/core';
import {Beranda} from './home.model';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  beranda: Beranda[];
  display: number;

  constructor(
      private homeService: HomeService
  ) {}

  ionViewWillEnter() {
    this.display = 1;
    this.beranda = this.homeService.getAllBarang();
  }

  onModeChange(mode: number){
    this.display = mode;
  }

}
