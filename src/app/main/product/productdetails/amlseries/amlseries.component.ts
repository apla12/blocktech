import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-amlseries',
  templateUrl: './amlseries.component.html',
  styleUrls: ['./amlseries.component.css'],
})
export class AmlseriesComponent implements OnInit {

  check = faCheck;

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.animation = true;
  }

  ngOnInit() {}
}
