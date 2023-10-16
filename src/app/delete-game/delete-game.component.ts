import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { topGame } from '../add-game.service';
import { DeleteGameService } from '../delete-game.service';

@Component({
  selector: 'app-delete-game',
  templateUrl: './delete-game.component.html',
  styleUrls: ['./delete-game.component.css'],
})
export class DeleteGameComponent {
  @Input()
  game!: topGame;
  @Output() gameDeleted = new EventEmitter<topGame>();

  constructor(private deleteGameService: DeleteGameService, public activeModal: NgbActiveModal) {}

  deleteGame() {
    this.deleteGameService.deleteGame(this.game.id).subscribe(() => {
      console.log('Game deleted:', this.game);
      this.gameDeleted.emit(this.game);
      this.activeModal.close('deleted');
    });
  }

  closeModal() {
    this.activeModal.close();
  }
}
