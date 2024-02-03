import { Component, ViewEncapsulation } from '@angular/core';
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  date: any;
  facebook = faFacebookSquare;
  youtube = faYoutube;
  instagram = faInstagram;

  ngOnInit(): void {
    const date = new Date();
    this.date = date.getFullYear();
    //Add 'implements OnInit' to the class.
  }
}
