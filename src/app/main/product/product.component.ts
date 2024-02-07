import {
  Component,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { AMLseriesComponent } from './productdetails/AMLseries/AMLseries.component';

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

  constructor(private router: Router) {}

  loadAMLSeries() {
    const componentRef = this.container.createComponent(AMLseriesComponent);
  }

  goAmlseries() {
    this.router.navigate(['/aml-series']);
  }
}
