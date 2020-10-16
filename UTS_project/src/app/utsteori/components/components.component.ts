import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  site;

  constructor(public popoverController: PopoverController) {
  }

  ngOnInit() {
    console.log(this.site);
  }

  sukseSuccess() {
    this.popoverController.dismiss();
  }

  doneDone() {
    this.popoverController.dismiss();
  }

  clearClear() {
    this.popoverController.dismiss('clear');
  }
}
