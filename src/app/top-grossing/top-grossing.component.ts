import { Component, OnInit } from '@angular/core';
import { topGame, AddGameService } from '../add-game.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-grossing',
  templateUrl: './top-grossing.component.html',
  styleUrls: ['./top-grossing.component.css'],
})
export class TopGrossingComponent implements OnInit{
  showModal = false;
  topGames: topGame[] = [];
  private modalRef!: NgbModalRef;

  constructor(private addGameService: AddGameService, private modalService: NgbModal) {}
  
  ngOnInit() {
    this.fetchTopGames();
  }

  openModal(content: any) {
    this.modalRef = this.modalService.open(content);
  }

  closeModal() {
    this.modalRef.close();
  }

  onGameAdded(game: topGame) {
    this.addGameService.addGame(game).subscribe((addedGame) => {
      console.log('Game added:', addedGame);
      this.closeModal();
      this.fetchTopGames();
    });
  }

  fetchTopGames() {
    this.addGameService.getTopGames().subscribe((data) => {
      this.topGames = data;
    });
  }
}
