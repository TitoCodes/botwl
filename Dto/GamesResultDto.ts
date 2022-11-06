import { GameStatus } from "enums/GameStatus";

export default class GameModel {
  name: string;
  imageSrc: string;
  description: string;
  playlistLink?: string;
  gameStatus: GameStatus;

  constructor(
    name: string,
    imageSrc: string,
    description: string,
    gameStatus: GameStatus,
    playlistLink?: string
  ) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.description = description;
    this.playlistLink = playlistLink;
    this.gameStatus = gameStatus;
  }
}
