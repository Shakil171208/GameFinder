import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cardsUrl = 'http://localhost:5260/api/cards';

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    const cards = this.http.get<Card[]>(this.cardsUrl);
    return cards;
  }
}

export interface Card {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  routerLink: string;
}



