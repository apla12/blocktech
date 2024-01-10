import { Component } from '@angular/core';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  faArrowRight = faArrowRight;
  check = faCheck;
}
