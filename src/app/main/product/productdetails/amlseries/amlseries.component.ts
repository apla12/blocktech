import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-amlseries',
  templateUrl: './amlseries.component.html',
  styleUrls: ['./amlseries.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AmlseriesComponent implements OnInit {
  check = faCheck;

  constructor() {}

  ngOnInit() {}

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  slideChangeMessage = '';

  slides: { image: string; text?: string }[] = [
    { image: '../../../../../assets/img/product/AML/AML-45.png' },
    { image: '../../../../../assets/img/product/AML/AML-45.50.png' },
    { image: '../../../../../assets/img/product/AML/AML-90.50.png' },
    { image: '../../../../../assets/img/product/AML/AML-90.png' },
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
