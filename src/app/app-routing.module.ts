import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'pipeline',
    component: PipelineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
