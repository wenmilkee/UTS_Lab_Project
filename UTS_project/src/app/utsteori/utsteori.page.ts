import { Component, OnInit } from '@angular/core';
import {AlertController, PopoverController} from '@ionic/angular';
import {ComponentsComponent} from './components/components.component';

@Component({
  selector: 'app-utsteori',
  templateUrl: './utsteori.page.html',
  styleUrls: ['./utsteori.page.scss'],
})
export class UtsteoriPage implements OnInit {

  constructor(
      public popoverController: PopoverController,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Success',
      message: 'Congratulate !',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'submit'
        }
      ]
    });
    await alert.present();
  }

  async presentPopover(ev: any) {
    const siteInfo = 'Click Success';
    const popover = await this.popoverController.create({
      component: ComponentsComponent,
      mode: 'ios',
      cssClass: 'my-custom-class',
      componentProps: {
        site: siteInfo
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
