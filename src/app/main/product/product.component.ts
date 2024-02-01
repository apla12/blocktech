import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { AmlseriesComponent } from './productdetails/amlseries/amlseries.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductComponent {
  faArrowRight = faArrowRight;
  check = faCheck;

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor() {}

  loadAMLSeries() {
    const componentRef = this.container.createComponent(AmlseriesComponent);
  }
}
