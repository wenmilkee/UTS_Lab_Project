import { Injectable } from '@angular/core';
import {Beranda} from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private beranda: Beranda[] = [
    {
      id: 'barang-1',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/21/314325/314325_90a8090d-bf71-4ff6-896d-d196752dde7b_800_800.jpg',
      type: 'Prosessor',
      brand: 'Intel',
      model: 'Core i5-9400',
      harga: 9000000,
      stok: 2,
      baseClock: 3.5,
      boostClock: 4.9,
      core: 8,
      threads: 16,
      speed: null,
      size: null,
      chipset: null,
      processor_compatible: null
    },
    {
      id: 'barang-2',
      imageUrl: 'https://cf.shopee.co.id/file/673dc718295914f3d20bbf0d71fcac8d',
      type: 'RAM',
      brand: 'Corsair',
      model: 'Vengeace RGB PRO',
      harga: 1500000,
      stok: 2,
      baseClock: 3.5,
      boostClock: 4.9,
      core: 8,
      threads: 16,
      speed: 3500,
      size: 16,
      chipset: null,
      processor_compatible: null
    },
    {
      id: 'barang-3',
      imageUrl: 'https://www.asrock.com/mb/photo/Fatal1ty%20B450%20Gaming%20K4.png',
      type: 'Motherboard',
      brand: 'ASUS',
      model: 'Asrock',
      harga: 5000000,
      stok: 2,
      baseClock: 3.5,
      boostClock: 4.9,
      core: 8,
      threads: 16,
      speed: null,
      size: null,
      chipset: 'Intel FHD',
      processor_compatible: 'Support Core i7'
    },

    {
      id: 'barang-4',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81pl3HAVGtL._AC_SL1500_.jpg',
      type: 'GPU',
      brand: 'Nvidia Geforce',
      model: '1080 TI',
      harga: 5000000,
      stok: 2,
      baseClock: 3.5,
      boostClock: 4.9,
      core: 8,
      threads: 16,
      speed: null,
      size: null,
      chipset: null,
      processor_compatible: null
    },
  ];
  constructor() { }

  getAllBarang() {
    return [...this.beranda];
  }

  getBarang(barangId: string) {
    return {...this.beranda.find(barang => {
        return barang.id === barangId;
      })};
  }
  deleteBarang(barangId: string) {
    this.beranda = this.beranda.filter(barang => {
      return barang.id !== barangId;
    });
  }

  addBarang(barang: Beranda){
    length = this.beranda.length;
    this.beranda.push({
      id: `barang-${length + 1}`,
      imageUrl: barang.imageUrl,
      brand: barang.brand,
      baseClock: barang.baseClock,
      boostClock: barang.boostClock,
      core: barang.core,
      threads: barang.threads,
      model: barang.model,
      harga: barang.harga,
      stok: barang.stok,
      type: barang.type,
      speed: barang.speed,
      size: barang.size,
      chipset: barang.chipset,
      processor_compatible: barang.processor_compatible
    });
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
    length = this.beranda.length;
    for (let i = 0; i < length; i++){
      if (this.beranda[i].id === updateId){
        this.beranda[i].id = updateId;
        this.beranda[i].imageUrl = updateImageUrl;
        this.beranda[i].brand = updateBrand;
        this.beranda[i].baseClock = updateBaseClock;
        this.beranda[i].boostClock = updateBoostClock;
        this.beranda[i].core = updateCore;
        this.beranda[i].speed = updateSpeed;
        this.beranda[i].size = updateSize;
        this.beranda[i].chipset = updateChipset;
        this.beranda[i].processor_compatible = updateProcessorCompatible;
        this.beranda[i].model = updateModel;
        this.beranda[i].model = updateModel;
        this.beranda[i].harga = updateHarga;
        this.beranda[i].stok = updateStok;
        this.beranda[i].type = updateType;
      }
    }
  }
}
