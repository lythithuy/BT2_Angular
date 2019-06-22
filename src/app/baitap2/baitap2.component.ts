import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap2',
  templateUrl: './baitap2.component.html',
  styleUrls: ['./baitap2.component.scss']
})
export class Baitap2Component implements OnInit {
  mangSP:any = [
    {MaSP:1, TenSP:"Sony XZ", Gia:1000},
    {MaSP:2, TenSP:"Sony XZ2", Gia:1000},
    {MaSP:3, TenSP:"HTC U Ultra", Gia:1000},
    {MaSP:4, TenSP:"HTC U12 plus", Gia:1000},
    {MaSP:5, TenSP:"Iphone XS Max", Gia:1000},
    {MaSP:6, TenSP:"Iphone XR", Gia:1000},
    {MaSP:7, TenSP:"Xiaomi Mi Note 3", Gia:1000},
    {MaSP:8, TenSP:"Xiaomi Mi 8", Gia:1000},
    {MaSP:9, TenSP:"Galaxy Note 9", Gia:1000},
    {MaSP:10, TenSP:"Galaxy S9 plus", Gia:1000},
    {MaSP:11, TenSP:"Nokia X9", Gia:1000},
  ];
  constructor() { }

  ngOnInit() {
    this.getLocalStorage();
  }


  setLocalStorage(){
    localStorage.setItem("sanpham", JSON.stringify(this.mangSP));
  }
  getLocalStorage(){
    if(localStorage.getItem("sanpham") !=null){
      this.mangSP = JSON.parse(localStorage.getItem("sanpham"));
    }
  }
 
  themSP(maSP, tenSP, gia ){
    const objectSP={
      MaSP:maSP,
      TenSP:tenSP,
      Gia: gia
    }

    this.mangSP.push(objectSP);
    this.setLocalStorage();

  }

  xoaSP(maSP_key){
    let index = this.mangSP.findIndex(function (item){
      return maSP_key ===item.MaSP;
    })

    this.mangSP.splice(index, 1);
    console.log(maSP_key);
  }

}
