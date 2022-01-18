import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceCatalogComponent } from './service-catalog/service-catalog.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'services', component: ServiceCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }