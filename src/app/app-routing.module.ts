import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGenreComponent } from './game-genre/game-genre.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { TopGrossingComponent } from './top-grossing/top-grossing.component';
import { RecentlyReleasedComponent } from './recently-released/recently-released.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }, 
  { path: 'genre', component: GameGenreComponent },
  { path: 'upcoming', component: UpcomingGamesComponent },
  { path: 'top-grossing', component: TopGrossingComponent },
  { path: 'recently-released', component: RecentlyReleasedComponent },
  { path: 'home-page', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
