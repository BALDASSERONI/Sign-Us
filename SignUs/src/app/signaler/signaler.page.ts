import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signaler',
  templateUrl: './signaler.page.html',
  styleUrls: ['./signaler.page.scss'],
})
export class SignalerPage implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/recapitulatif-de-vos-signalement'])
  }

  retour() {
    this.router.navigate(['/menu'])
  }

  ngOnInit() {
  }

}
