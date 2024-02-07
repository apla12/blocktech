import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    //quando esta aberto
    //button --->  class="navbar-toggler collapsed"    aria-expanded="false"
    //class="navbar-collapse collapse show"

    //quando esta fechado
    // button --->  class="navbar-toggler collapsed"    aria-expanded="false"
    //class="navbar-collapse collapse"
  }
}
