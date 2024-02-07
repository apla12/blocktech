import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-btaseries',
  templateUrl: './btaseries.component.html',
  styleUrls: ['./btaseries.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BtaseriesComponent {
  check = faCheck;

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  slideChangeMessage = '';

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

  slides: { image: string; text?: string }[] = [
    { image: '../../../../../assets/img/product/BTA/BTA-open-100.png' },
    { image: '../../../../../assets/img/product/BTA/BTA-close-100.png' },
    { image: '../../../../../assets/img/product/BTA/BTA-open-150.png' },
    { image: '../../../../../assets/img/product/BTA/BTA-close-150.png' },
  ];

  slides_install: { image: string; text?: string }[] = [
    { image: '../../../../../assets/img/product/AML/AML-install1.png' },
    { image: '../../../../../assets/img/product/AML/AML-install2.png' },
    { image: '../../../../../assets/img/product/AML/AML-install3.png' },
    { image: '../../../../../assets/img/product/AML/AML-install4.png' },
  ];
}
