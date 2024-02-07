import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BcseriesComponent } from './main/product/productdetails/bcseries/bcseries.component';
import { BtaseriesComponent } from './main/product/productdetails/btaseries/btaseries.component';
import { BtseriesComponent } from './main/product/productdetails/btseries/btseries.component';
import { AMLseriesComponent } from './main/product/productdetails/AMLseries/AMLseries.component';
import { BEseriesComponent } from './main/product/productdetails/BEseries/BEseries.component';
import { BLseriesComponent } from './main/product/productdetails/BLseries/BLseries.component';
import { BARseriesComponent } from './main/product/productdetails/BARseries/BARseries.component';
import { BRLseriesComponent } from './main/product/productdetails/BRLseries/BRLseries.component';
import { PFLseriesComponent } from './main/product/productdetails/PFLseries/PFLseries.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'aml-series', component: AMLseriesComponent },
  { path: 'bta-series', component: BtaseriesComponent },
  { path: 'bc-series', component: BcseriesComponent },
  { path: 'bt-series', component: BtseriesComponent },
  { path: 'be-series', component: BEseriesComponent },
  { path: 'bl-series', component: BLseriesComponent },
  { path: 'bar-series', component: BARseriesComponent },
  { path: 'brl-series', component: BRLseriesComponent },
  { path: 'pfl-series', component: PFLseriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
