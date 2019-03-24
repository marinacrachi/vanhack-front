import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// components
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { HeaderComponent } from './components/header/header.component';

// services
import { PropertyService } from './services/property.service';
import { ClientService } from './services/client.service';
import { PipelineService } from './services/pipeline.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    PipelineComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PropertyService,
    ClientService,
    PipelineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
