import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertyService } from './components/services/property.service';

// services


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    PipelineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
