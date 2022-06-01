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
    new GameModel("It Takes Two", ItTakesTwoImage, "It Takes Two is an action-adventure platform game developed by Hazelight Studios and published by Electronic Arts. ", GameStatus.Completed,"https://www.youtube.com/playlist?list=PLLAhYom1S-4NPSgJxcpfdf_so9w8dAVlG" ),
    new GameModel("Cuphead", CupheadImage, "Cuphead is a run and gun video game developed and published by Studio MDHR. ", GameStatus.New),
    new GameModel("A Way Out", AWayOutImage, "A Way Out is an action-adventure game developed by Hazelight Studios and published by Electronic Arts.", GameStatus.NowPlaying, "https://youtube.com/playlist?list=PLLAhYom1S-4MEuTtyClqx-0BkbXlNpxuw"),
    new GameModel("Stardew Valley", StardewValleyImage, "Stardew Valley is a simulation role-playing video game developed by Eric 'ConcernedApe' Barone.", GameStatus.New),
    new GameModel("Don't Starve Together", DontStarveTogetherImage, "Don't Starve Together is the sequel to Don't Starve, and features the requested multiplayer mechanics.", GameStatus.New),
    new GameModel("Overcooked 2", OverCookedTwoImage, "Overcooked 2 is a cooperative cooking simulation video game developed by Team17 alongside Ghost Town Games, and published by Team17. ", GameStatus.NowPlaying),
    new GameModel("Minecraft Dungeons", MinecraftImage, "Minecraft Dungeons is a 2020 dungeon crawler video game developed by Mojang Studios and Double Eleven and published by Xbox Game Studios.", GameStatus.NowPlaying, "https://youtube.com/playlist?list=PLLAhYom1S-4OWIHqYRIU71ueComqnma8N"),
    new GameModel("Unravel Two", UnravelTwoImage, "Unravel Two is a puzzle-platform game developed by Swedish studio Coldwood Interactive and published by Electronic Arts.", GameStatus.New),
];