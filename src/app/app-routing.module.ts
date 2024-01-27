import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AmlseriesComponent } from './main/product/productdetails/amlseries/amlseries.component';
import { BtaseriesComponent } from './main/product/productdetails/btaseries/btaseries.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'aml-series', component: AmlseriesComponent },
  { path: 'bta-series', component: BtaseriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
