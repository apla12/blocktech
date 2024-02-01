import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-btseries',
  templateUrl: './btseries.component.html',
  styleUrls: ['./btseries.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BtseriesComponent implements OnInit {
  check = faCheck;

  constructor() {}

  ngOnInit() {}

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  slideChangeMessage = '';

  slides: { image: string; text?: string }[] = [
    { image: '../../../../../assets/img/product/BT/BT-100.png' },
  ];

  slides_install: { image: string; text?: string }[] = [
    { image: '../../../../../assets/img/product/AML/AML-install1.png' },
    { image: '../../../../../assets/img/product/AML/AML-install2.png' },
    { image: '../../../../../assets/img/product/AML/AML-install3.png' },
    { image: '../../../../../assets/img/product/AML/AML-install4.png' },
  ];

  log(event: number) {
    setTimeout(() => {
      if (event === 0) {
        this.slideChangeMessage = 'TEXTO PRIMEIRA IMAGEM';
      } else if (event === 1) {
        this.slideChangeMessage = 'TEXTO SEGUNDA IMAGEM';
      } else if (event === 2) {
        this.slideChangeMessage = 'TEXTO TERCEIRA IMAGEM';
      } else if (event === 3) {
        this.slideChangeMessage = 'TEXTO QUARTA IMAGEM';
      }
    });
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
