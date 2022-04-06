import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vos-signaux-en-cours',
  templateUrl: './vos-signaux-en-cours.page.html',
  styleUrls: ['./vos-signaux-en-cours.page.scss'],
})
export class VosSignauxEnCoursPage implements OnInit {

  constructor(private router: Router) { }

  navigate() {
    this.router.navigate(['/menu'])
  }

  ngOnInit() {
  }

}
