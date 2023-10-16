import { Component, OnInit } from '@angular/core';
import { topGame, AddGameService } from '../add-game.service';
import { EditGameService } from '../edit-game.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EditGameComponent } from '../edit-game/edit-game.component';
import { DeleteGameComponent } from '../delete-game/delete-game.component';

@Component({
  selector: 'app-top-grossing',
  templateUrl: './top-grossing.component.html',
  styleUrls: ['./top-grossing.component.css'],
})
export class TopGrossingComponent implements OnInit {
  showModal = false;
  topGames: topGame[] = [];
  private modalRef!: NgbModalRef;

  constructor(
    private addGameService: AddGameService,
    private modalService: NgbModal,
    private editGameService: EditGameService
  ) { }

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

  openEditModal(game: topGame) {
    this.modalRef = this.modalService.open(EditGameComponent);
    this.modalRef.componentInstance.game = { ...game };
    this.modalRef.componentInstance.game.releasedDate = game.releasedDate;
    this.modalRef.componentInstance.gameEdited.subscribe((game: topGame) => {
      const index = this.topGames.findIndex((g) => g.gameId === game.gameId);
      if (index !== -1) {
        this.topGames[index] = game;
      }
    });
  }

  openDeleteModal(game: topGame) {
    const modalRef = this.modalService.open(DeleteGameComponent);
    modalRef.componentInstance.game = game;
    modalRef.result.then((result) => {
      if (result === 'deleted') {
        this.fetchTopGames();
      }
    });
  }
}
