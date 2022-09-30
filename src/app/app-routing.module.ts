import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'info/:detalle', component: DetailInfoComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
