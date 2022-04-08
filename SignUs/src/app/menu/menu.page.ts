import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    ) { }

  async home() {
    const loading = await this.loadingController.create();
    await loading.present();

    await this.authService.logout();
    await loading.dismiss()

    
    this.router.navigate(['/home'])
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
