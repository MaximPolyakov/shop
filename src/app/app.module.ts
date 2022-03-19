import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DressesComponent } from './components/dresses/dresses.component';
import { TrousersComponent } from './components/trousers/trousers.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardRendererComponent } from './components/card-renderer/card-renderer.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DressesComponent,
    TrousersComponent,
    ShortsComponent,
    MenuComponent,
    CardRendererComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
