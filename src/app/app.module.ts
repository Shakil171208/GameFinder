import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GameGenreComponent } from './game-genre/game-genre.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { TopGrossingComponent } from './top-grossing/top-grossing.component';
import { RecentlyReleasedComponent } from './recently-released/recently-released.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardService } from './card.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddGameFormComponent } from './add-game-form/add-game-form.component';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatDialogModule } from '@angular/material/dialog';
import { EditGameComponent } from './edit-game/edit-game.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GameGenreComponent,
    UpcomingGamesComponent,
    TopGrossingComponent,
    RecentlyReleasedComponent,
    HomePageComponent,
    AddGameFormComponent,
    EditGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
