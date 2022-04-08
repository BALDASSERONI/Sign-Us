import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage{
  credentials: FormGroup;

  constructor(
    private  fb: FormBuilder,
    private  loadingController: LoadingController,
    private  alertController: AlertController,
    private  authService: AuthService,
    private router: Router,
    ) { }

  get email() {
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  navigate() {
    this.router.navigate(['/menu'])
  }

  retour() {
    this.router.navigate(['/home'])
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss()

    if(user){
      this.router.navigateByUrl('/menu', {replaceUrl: true})
    }else{
      this.showAlert("L'inscription a échoué...", "Veuillez réessayer")
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Reçu']
    });
    await alert.present();
  }

}
