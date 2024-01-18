import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-amlseries',
  templateUrl: './amlseries.component.html',
  styleUrls: ['./amlseries.component.css'],
})
export class AmlseriesComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {}
}
