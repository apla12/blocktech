import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-btaseries',
  templateUrl: './btaseries.component.html',
  styleUrls: ['./btaseries.component.css'],
})
export class BtaseriesComponent {
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
