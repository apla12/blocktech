import { Component } from '@angular/core';
import {
  faAnchor,
  faCheck,
  faChess,
  faLineChart,
  faPenRuler,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  pencil = faPenRuler;
  strategy = faChess;
  anchor = faAnchor;
  check = faCheck;
  doers = faLineChart;
}
