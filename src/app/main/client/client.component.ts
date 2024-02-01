import { Component, ViewEncapsulation } from '@angular/core';
import { faCheck, faEquals, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientComponent {
  check = faCheck;
  plus = faPlus;
  equals = faEquals;
}
