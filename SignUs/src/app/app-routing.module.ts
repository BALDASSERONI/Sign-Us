import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import{
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['home']);
const redirectLoggedInToMenu = () => redirectLoggedInTo(['menu']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), //page d'accueil qui gère également la connexion
    ...canActivate(redirectLoggedInToMenu)
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'connexion', //ici la page connexion "connexion" permettra de rediriger les échecs de connexion
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'signaler',
    loadChildren: () => import('./signaler/signaler.module').then( m => m.SignalerPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    ...canActivate(redirectUnauthorizedToHome)
  },
  {
    path: 'vos-signaux-en-cours',
    loadChildren: () => import('./vos-signaux-en-cours/vos-signaux-en-cours.module').then( m => m.VosSignauxEnCoursPageModule)
  },
  {
    path: 'recapitulatif-du-signalement',
    loadChildren: () => import('./recapitulatif-du-signalement/recapitulatif-du-signalement.module').then( m => m.RecapitulatifDuSignalementPageModule)
  },
  {
    path: 'formulaire-envoyer',
    loadChildren: () => import('./formulaire-envoyer/formulaire-envoyer.module').then( m => m.FormulaireEnvoyerPageModule)
  },
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
