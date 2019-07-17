import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KarmaComponent } from '../karma/karma.component';
import { JasmineComponent } from '../jasmine/jasmine.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ScenariosComponent } from '../scenarios/scenarios.component';


const routes: Routes = [
  {
    path: 'karma',
    component: KarmaComponent
  },
  {
    path: 'jasmine',
    component: JasmineComponent
  },
  {
    path: 'scenarios',
    component: ScenariosComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
