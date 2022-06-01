import { GameStatus } from "enums/GameStatus";
import { StaticImageData } from "next/image";

export default class GameModel {
  name: string;
  imageSrc: StaticImageData;
  description: string;
  playlistLink?: string;
  gameStatus: GameStatus;

  constructor(
    name: string,
    imageSrc: StaticImageData,
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
