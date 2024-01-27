import { Component } from '@angular/core';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  check = faCheck;
}
