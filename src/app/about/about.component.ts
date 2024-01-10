import { Component } from '@angular/core';
import { faThinkPeaks } from '@fortawesome/free-brands-svg-icons';
import { faAnchor, faCheck, faChess, faPenRuler, faPencilRuler, faShare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  pencil = faPenRuler;
  strategy = faChess;
  anchor = faAnchor;
  check = faCheck;

}
