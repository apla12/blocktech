import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productall',
  templateUrl: './productall.component.html',
  styleUrls: ['./productall.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductallComponent {
  itemsPerSlide = window.innerWidth > 990 ? 5 : 2;
  singleSlideOffset = true;
  activeSlideIndex = 0;
  myInterval = 3000;
  link: any;

  constructor(private router: Router) {}

  slides = [
    {
      image: '../../../../../assets/img/product/AML/AML-45.50.png',
      router: '/aml-series',
    },
    {
      image: '../../../../../assets/img/product/BTA/BTA-open-100.png',
      router: '/bta-series',
    },
    {
      image: '../../../../../assets/img/product/BT/BT-150.png',
      router: '/bt-series',
    },
    {
      image: '../../../../../assets/img/product/BC/BC-50.png',
      router: '/bc-series',
    },
    {
      image: '../../../../../assets/img/product/BE/BE-1.png',
      router: '/be-series',
    },
    {
      image: '../../../../../assets/img/product/BL/BL-75.png',
      router: '/bl-series',
    },
    {
      image: '../../../../../assets/img/product/BAR/BAR-25.png',
      router: '/bar-series',
    },
    {
      image: '../../../../../assets/img/product/BRL/75BRL-40.png',
      router: '/brl-series',
    },
    {
      image: '../../../../../assets/img/product/PFL/PFL-40.png',
      router: '/pfl-series',
    },
  ];
}
