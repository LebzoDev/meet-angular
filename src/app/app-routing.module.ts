import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ReservationBiensComponent } from './biens/reservation-biens/reservation-biens.component';



const routes: Routes = [
  {path:'', redirectTo:'/biens', pathMatch:'full'},
  {path:'biens',component:ListBienComponent},
  {path:'biens/add',component:AddBienComponent},
  {path:'biens/:id',component:DetailBienComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
