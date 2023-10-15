import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddGameService {
  private addGameUrl = 'http://localhost:5260/api/topgames';
  private getTopGamesUrl = 'http://localhost:5260/api/topgames';
  updateGame: any;

  constructor(private http: HttpClient) {}
  
  addGame(game: topGame): Observable<topGame> {console.log(game);
    return this.http.post<topGame>(this.addGameUrl, game);
  }

  getTopGames(): Observable<topGame[]> {
    return this.http.get<topGame[]>(this.getTopGamesUrl);
  }
}

export interface topGame {
 id: number
 gameId: number | null
 name: string
 description: string
 genre: string
 imageUrl: string
 releasedDate: Date | null
}
