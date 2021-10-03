import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListBienComponent } from '../biens/list-bien/list-bien.component';
import { DetailBienComponent } from '../biens/detail-bien/detail-bien.component';
import { ReservationBiensComponent } from '../biens/reservation-biens/reservation-biens.component';
import { AddBienComponent } from '../biens/add-bien/add-bien.component';
import { EditReservationsComponent } from '../biens/reservation-biens/edit-reservations/edit-reservations.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoute: Routes = [
  {path:'reservations',
  component: ReservationBiensComponent,
  children:[
    {
      path: ':id', component:DetailBienComponent
    },
    {
      path: ':id/edit',component:EditReservationsComponent
    }
  ]
},
{
  path:'not-found',component:PageNotFoundComponent,
},
{
  path:'**',redirectTo:'/not-found',
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
exports:[RouterModule]
})
export class AppRoutingOtherModule { }
