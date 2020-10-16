import { Component, OnInit } from '@angular/core';
import {Beranda} from '../home/home.model';
import {HomeService} from '../home/home.service';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  beranda: Beranda[];

  constructor(
      private homeService: HomeService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.beranda = this.homeService.getAllBarang();
  }

  editBarang(beranda: Beranda, slidingItem: IonItemSliding) {
    slidingItem.close();

  }

  deleteBarang(beranda: Beranda, slidingItem: IonItemSliding) {
    slidingItem.close();

  }

}
