import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-amlseries',
  templateUrl: './AMLseries.component.html',
  styleUrls: ['./AMLseries.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AMLseriesComponent implements OnInit {
  check = faCheck;
  // exibir: boolean = false;

  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  slideChangeMessage = '';

  form!: FormGroup;

  angulo = 0;
  diametro = -1;
  link_mercadolivre = '';
  link_magazineluiza = '';
  link_americanas = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

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

  setAnguloAtivo(index: number) {
    this.angulo = index;
    this.diametro = -1;
  }

  setDiametroAtivo(index: number) {
    this.diametro = index;
  }

  redirecionarParaParceiro(index: number) {
    this.gerarLink();

    if (index === 0) window.open(this.link_mercadolivre, '_blank');
    if (index === 1) window.open(this.link_magazineluiza, '_blank');
    if (index === 2) window.open(this.link_americanas, '_blank');
  }

  gerarLink() {
    if (this.angulo === 0 && this.diametro === 0) {
      this.link_mercadolivre =
        'https://blocktechcomercioeindustria.mercadoshops.com.br/MLB-4450048962-acabamento-blocktech-branco-45-40-p-ponto-da-maq-de-lavar-_JM?#item_id=MLB4450048962&component=tabbed_carrousel&page_from=home';
      this.link_magazineluiza =
        'https://www.magazineluiza.com.br/acabamento-estetico-blocktech-45o-40mm-para-o-ponto-da-maquina-de-lavar/p/ajd6c65f13/ed/pnpl/';
      this.link_americanas = '';
      console.log(this.link_mercadolivre);
    } else if (this.angulo === 0 && this.diametro == 1) {
      this.link_mercadolivre =
        'https://blocktechcomercioeindustria.mercadoshops.com.br/MLB-3598974141-acabamento-blocktech-45-50mm-p-ponto-da-maq-de-lavar-_JM?#item_id=MLB3598974141&component=tabbed_carrousel&page_from=home';
      this.link_magazineluiza =
        'https://www.magazineluiza.com.br/acabamento-estetico-blocktech-45o-50mm-para-o-ponto-da-maquina-de-lavar/p/hbj94f997b/ed/pnpl/';
      this.link_americanas = '';
      console.log(this.link_mercadolivre);
    } else if (this.angulo === 1 && this.diametro == 0) {
      this.link_mercadolivre =
        'https://blocktechcomercioeindustria.mercadoshops.com.br/MLB-4450001708-acabamento-blocktech-branco-90-40-p-ponto-da-maq-de-lavar-_JM?#item_id=MLB4450001708&component=tabbed_carrousel&page_from=home';
      this.link_magazineluiza =
        'https://www.magazineluiza.com.br/acabamento-estetico-blocktech-90o-40mm-para-o-ponto-da-maquina-de-lavar/p/ccaf59f837/ep/maco/';
      this.link_americanas = '';
      console.log(this.link_mercadolivre);
    } else if (this.angulo === 1 && this.diametro == 1) {
      this.link_mercadolivre =
        'https://blocktechcomercioeindustria.mercadoshops.com.br/MLB-4450000254-acabamento-blocktech-branco-90-50-p-ponto-da-maq-de-lavar-_JM?#item_id=MLB4450000254&component=tabbed_carrousel&page_from=home';
      this.link_magazineluiza =
        'https://www.magazineluiza.com.br/acabamento-estetico-blocktech-90o-50mm-para-o-ponto-da-maquina-de-lavar/p/ebkbje800d/ed/pnpl/';
      this.link_americanas = '';
      console.log(this.link_mercadolivre);
    } else if (this.angulo === 1 && this.diametro == 2) {
      this.link_mercadolivre =
        'https://blocktechcomercioeindustria.mercadoshops.com.br/MLB-3599003229-acabamento-blocktech-90-50j-pponto-da-maq-de-lavar-_JM?#item_id=MLB3599003229&component=tabbed_carrousel&page_from=home';
      this.link_magazineluiza =
        'https://www.magazineluiza.com.br/acabamento-estetico-blocktech-90o-50j-mm-para-o-ponto-da-maquina-de-lavar/p/kgh8gd3f9e/ep/maco/';
      this.link_americanas = '';
      console.log(this.link_mercadolivre);
    }
  }
}
