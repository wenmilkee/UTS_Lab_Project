import { Component, OnInit } from '@angular/core';
import {Beranda} from '../home/home.model';
import {HomeService} from '../home/home.service';
import {AlertController, IonItemSliding, ToastController} from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  beranda: Beranda[];

  constructor(
      private homeService: HomeService,
      private router: Router,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.beranda = this.homeService.getAllBarang();
  }

  editBarang(beranda: Beranda, slidingItem: IonItemSliding) {
    slidingItem.close();

  }

  deletePilihanBarang(barangId) {
    for (let i = 0; i < this.beranda.length; i++){
      let productIndex = this.beranda[i].id;
      if (productIndex == barangId){
        this.homeService.deleteBarang(productIndex);
        this.beranda.splice(i, 1);
      }
    }
    this.router.navigate(['/admin']).then(nav => {
      this.presentToast();
    }, err => {
      console.log("error");
    });
  }

  async presentAlert(id) {
    const alert = await this.alertCtrl.create({
      header: 'Hapus Barang',
      message: `Apakah kamu yakin ingin menghapus barang ini ?`,
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya',
          handler: () => this.deletePilihanBarang(id)
        }
      ]
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Barang dihapus',
      color: 'success',
      duration: 3000
    });
    toast.present();
  }

}
