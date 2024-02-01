import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AmlseriesComponent } from './main/product/productdetails/amlseries/amlseries.component';
import { BtaseriesComponent } from './main/product/productdetails/btaseries/btaseries.component';
import { BcseriesComponent } from './main/product/productdetails/bcseries/bcseries.component';
import { BtseriesComponent } from './main/product/productdetails/btseries/btseries.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'aml-series', component: AmlseriesComponent },
  { path: 'bta-series', component: BtaseriesComponent },
  { path: 'bc-series', component: BcseriesComponent },
  { path: 'bt-series', component: BtseriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
