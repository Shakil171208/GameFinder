import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditGameService {
  private editGameUrl = 'http://localhost:5260/api/topgames';
  updateGame: any;

  constructor(private http: HttpClient) {}

  editGame(game: topGame): Observable<topGame> {
    return this.http.put<topGame>(`${this.editGameUrl}/${game.gameId}`, game);
  }
}

export interface topGame {
  id: number;
  gameId: number;
  name: string;
  description: string;
  genre: string;
  imageUrl: string;
  releasedDate: Date;
}


