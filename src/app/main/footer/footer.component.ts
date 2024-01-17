import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  date: any;

  ngOnInit(): void {
    const date = new Date();
    this.date = date.getFullYear();
    //Add 'implements OnInit' to the class.
  }
}
