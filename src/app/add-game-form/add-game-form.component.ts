import { Component, Output, EventEmitter } from '@angular/core';
import { topGame } from '../add-game.service';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css'],
})
export class AddGameFormComponent {
  faCalendarAlt = faCalendarAlt;
  game: topGame = {
    id : 0,
    gameId: null,
    name: '',
    description: '',
    genre: '',
    imageUrl: '',
    releasedDate: null,
  };

  gameIdError: boolean = false;
  nameError: boolean = false;
  descriptionError: boolean = false;
  genreError: boolean = false;
  imageError: boolean = false;
  releasedDateError: boolean = false;

  @Output() gameAdded = new EventEmitter<topGame>();

  addGame() {
    if (!this.hasErrors()) {
      this.gameAdded.emit(this.game);
    }
  }

  hasErrors(): boolean {
    this.gameIdError = this.game.gameId === null || this.game.gameId === undefined;
    if (this.gameIdError) {
      this.game.gameId = null; 
    }
    this.nameError = !this.game.name;
    this.descriptionError = !this.game.description;
    this.genreError = !this.game.genre;
    this.imageError = !this.game.imageUrl;
    this.releasedDateError = !this.game.releasedDate || this.game.releasedDate.toString() === 'Invalid Date';
    return (
      this.gameIdError ||
      this.nameError ||
      this.descriptionError ||
      this.genreError ||
      this.imageError ||
      this.releasedDateError
    );
  }
}
