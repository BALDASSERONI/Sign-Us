import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  connexion() {
    this.router.navigate(['/connexion'])
  }

  navigate() {
    this.router.navigate(['/signaler'])
  }

  retour() {
    this.router.navigate(['/vos-signaux-en-cours'])
  }

  ngOnInit() {
  }

}
