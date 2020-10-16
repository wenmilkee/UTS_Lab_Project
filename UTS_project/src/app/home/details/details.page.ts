import { Component, OnInit } from '@angular/core';
import {Beranda} from '../home.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  loadedBeranda: Beranda;
  dataURL: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService,
      private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.dataURL = paramMap.get('barangId');
    });
    this.loadedBeranda = this.homeService.getBarang(this.dataURL);
  }

}
