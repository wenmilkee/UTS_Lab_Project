import { Component, OnInit } from '@angular/core';
import {Beranda} from '../../home/home.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../home/home.service';
import {LoadingController, ToastController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  loadedBarang: Beranda;
  dataUrl: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService,
      private router: Router,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.dataUrl = paramMap.get('barangId');
    });
    this.loadedBarang = this.homeService.getBarang(this.dataUrl);
  }

  onSubmit(form: NgForm){
    const id = form.value.id;
    const imageUrl = form.value.imageUrl;
    const brand = form.value.brand;
    const BaseClock = form.value.baseClock;
    const BoostClock = form.value.boostClock;
    const CoreCount = form.value.core;
    const ThreadCount = form.value.threads;
    const ramSpeed = form.value.speed;
    const ramSize = form.value.size;
    const motherboardChipset = form.value.chipset;
    const motherboardProcessorCompatible = form.value.processor_compatible;
    const model = form.value.model;
    const price = form.value.harga;
    const stock = form.value.stok;
    const type = form.value.type;
    this.editBarang(id, imageUrl, brand, BaseClock,
        BoostClock, CoreCount, ThreadCount, ramSpeed,
        ramSize, motherboardChipset, motherboardProcessorCompatible, model,
        price, stock, type);
  }

  editBarang(updateId, updateImageUrl,
             updateBrand, updateBaseClock,
             updateBoostClock,
             updateCore,
             updateThreadcount,
             updateSpeed,
             updateSize,
             updateChipset,
             updateProcessorCompatible,
             updateModel,
             updateHarga,
             updateStok,
             updateType){



    this.presentLoading().then(() => {
      this.homeService.editBarang( updateId, updateImageUrl,
          updateBrand, updateBaseClock,
          updateBoostClock,
          updateCore,
          updateThreadcount,
          updateSpeed,
          updateSize,
          updateChipset,
          updateProcessorCompatible,
          updateModel,
          updateHarga,
          updateStok,
          updateType);
      this.router.navigate(['./admin']);
      this.presentToast();
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Memperbarui Barang...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: `Product ${this.loadedBarang.brand} ${this.loadedBarang.model} updated`,
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

}
