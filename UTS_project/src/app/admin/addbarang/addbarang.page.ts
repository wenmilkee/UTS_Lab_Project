import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Beranda} from '../../home/home.model';
import {HomeService} from '../../home/home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addbarang',
  templateUrl: './addbarang.page.html',
  styleUrls: ['./addbarang.page.scss'],
})
export class AddbarangPage implements OnInit {
  loadBarang: Beranda;
  constructor(
      private homeService: HomeService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  tambahBarang(form: NgForm) {
    this.homeService.addBarang(form.value);
    this.router.navigate(['./admin']);
  }

}
