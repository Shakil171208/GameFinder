import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteGameService {
  private deleteGameUrl = 'http://localhost:5260/api/topgames';

  constructor(private http: HttpClient) {}

  deleteGame(id: number): Observable<void> {
    const url = `${this.deleteGameUrl}/${id}`;
    return this.http.delete<void>(url);
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
