import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalsComponent } from './pages/animals/animals.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'art', component: HomeComponent },
  { path: 'music', component: HomeComponent },
  { path: 'dance', component: HomeComponent },
  { path: 'sport', component: HomeComponent },
  { path: 'games', component: HomeComponent },
  { path: 'films', component: HomeComponent },
  { path: 'comics', component: HomeComponent },
];
