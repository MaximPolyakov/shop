import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { TrousersComponent } from './components/trousers/trousers.component';
import { ShortsComponent } from './components/shorts/shorts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dresses', component: DressesComponent},
  {path: 'trousers', component: TrousersComponent},
  {path: 'shorts', component: ShortsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
