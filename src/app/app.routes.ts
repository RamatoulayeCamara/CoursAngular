import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
     {path: '', redirectTo: "/Accueil",pathMatch:'full'},
     {path: '**', component:Error404Component},
     {path: 'Accueil', component:AccueilComponent},
     {path: 'etudiants', component:ListeEtudiantComponent},
     {path: 'enseigants', component:ListeEnseignantComponent}
];
