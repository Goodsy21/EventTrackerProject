import { HomeComponent } from './components/home/home.component';
import { RoundComponent } from './components/round/round.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'edit/:round.id', component: EditFormComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
