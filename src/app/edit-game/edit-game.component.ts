import { Component, Output, EventEmitter, Input } from '@angular/core';
import { topGame, EditGameService } from '../edit-game.service';
import { AddGameService } from '../add-game.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
})
export class EditGameComponent {
  @Input()
  game!: topGame;
  @Output() gameEdited = new EventEmitter<topGame>();
  @Output() closeModal = new EventEmitter();

  constructor(public activeModal: NgbActiveModal, private addGameService: AddGameService, private editGameService: EditGameService, private router: Router) {}

  
  editGame() {
    this.editGameService.editGame(this.game).subscribe((editedGame) => {
      console.log('Game edited:', editedGame);
      this.gameEdited.emit(editedGame);
      this.activeModal.close();
    });
  }
}

