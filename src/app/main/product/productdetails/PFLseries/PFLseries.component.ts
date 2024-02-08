import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-PFLseries',
  templateUrl: './PFLseries.component.html',
  styleUrls: ['./PFLseries.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PFLseriesComponent implements OnInit {
  check = faCheck;

  constructor() {}

  ngOnInit() {}

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  slideChangeMessage = '';

  slides: { image: string; text?: string }[] = [
    { image: '../../../../../assets/img/product/AML/AML-45.50.png' },
    { image: '../../../../../assets/img/product/AML/AML-45.png' },
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
        this.slideChangeMessage =
          'O tubo de esgoto deve ser cortado e ficar exatamente igualado com a parede. Não pode ter nenhum pedaço de tubo para fora da parede.';
      } else if (event === 1) {
        this.slideChangeMessage =
          'Seção cilíndrica do acabamento estético BLOCKTECH com inclinação de 45⁰ que será encaixada no tubo de esgoto com diâmetro de 50 ou 40 mm.';
      } else if (event === 2) {
        this.slideChangeMessage =
          'Produto está sendo apenas encaixado no tubo de esgoto com  diâmetro de 50 ou 40 mm. Não precisa de nenhum tipo de cola ou fita veda rosca para a instalação.';
      } else if (event === 3) {
        this.slideChangeMessage =
          'Produto já instalado e pronto para receber a tubulação corrugada da máquina de lavar roupa.';
      }
    });
  }

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
