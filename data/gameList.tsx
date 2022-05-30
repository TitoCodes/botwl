import GameModel from "model/GameModel";
import { GameStatus } from "enums/GameStatus";
import DontStarveTogetherImage from 'resources/images/games/dont-starve-together.jpg';
import MinecraftImage from 'resources/images/games/minecraft-dungeon.jpg';
import ItTakesTwoImage from 'resources/images/currently-playing/it-takes-two.jpg';
import CupheadImage from 'resources/images/games/cuphead.jpg';
import AWayOutImage from 'resources/images/games/a-way-out.jpg';
import OverCookedTwoImage from 'resources/images/games/overcooked-2.jpg';
import StardewValleyImage from 'resources/images/games/stardew-valley.jpg';
import UnravelTwoImage from 'resources/images/games/unravel-two.jpg';

export const gameList = [
    new GameModel("It Takes Two", ItTakesTwoImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.Completed,"https://www.youtube.com/playlist?list=PLLAhYom1S-4NPSgJxcpfdf_so9w8dAVlG" ),
    new GameModel("Cuphead", CupheadImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("A Way Out", AWayOutImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.NowPlaying, "https://youtube.com/playlist?list=PLLAhYom1S-4MEuTtyClqx-0BkbXlNpxuw"),
    new GameModel("Stardew Valley", StardewValleyImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("Don't Starve Together", DontStarveTogetherImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("Overcooked 2", OverCookedTwoImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.NowPlaying),
    new GameModel("Minecraft Dungeons", MinecraftImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.NowPlaying),
    new GameModel("Unravel Two", UnravelTwoImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
];