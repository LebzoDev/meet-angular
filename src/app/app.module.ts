import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BiensComponent } from './biens/biens.component';
import { AddBienComponent } from './biens/add-bien/add-bien.component';
import { DetailBienComponent } from './biens/detail-bien/detail-bien.component';
import { ListBienComponent } from './biens/list-bien/list-bien.component';
import { ItemBienComponent } from './biens/list-bien/item-bien/item-bien.component';
import { JumbotronBienComponent } from './biens/jumbotron-bien/jumbotron-bien.component';
import { UtilsService } from './utils.service';
import { SeparatorPipe } from './pipes/separator.pipe';
import { EditTimePipe } from './pipes/edit-time.pipe';
import { ReservationBiensComponent } from './biens/reservation-biens/reservation-biens.component';
import { DetailsReservationsComponent } from './biens/reservation-biens/details-reservations/details-reservations.component';
import { EditReservationsComponent } from './biens/reservation-biens/edit-reservations/edit-reservations.component';
import { AppRoutingOtherModule } from './app-routing-other/app-routing-other.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BiensComponent,
    AddBienComponent,
    DetailBienComponent,
    ListBienComponent,
    ItemBienComponent,
    JumbotronBienComponent,
    SeparatorPipe,
    EditTimePipe,
    ReservationBiensComponent,
    DetailsReservationsComponent,
    EditReservationsComponent,
    PageNotFoundComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingOtherModule
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
