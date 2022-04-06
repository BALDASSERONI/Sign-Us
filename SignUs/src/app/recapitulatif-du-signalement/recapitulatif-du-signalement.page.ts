import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recapitulatif-du-signalement',
  templateUrl: './recapitulatif-du-signalement.page.html',
  styleUrls: ['./recapitulatif-du-signalement.page.scss'],
})
export class RecapitulatifDuSignalementPage implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/signaler'])
  }

  ngOnInit() {
  }

}
