import Image from 'next/image';
import DontStarveTogetherImage from '../../../resources/images/games/dont-starve-together.jpg';
import MinecraftImage from '../../../resources/images/games/minecraft-dungeon.jpg';
import ItTakesTwoImage from '../../../resources/images/currently-playing/it-takes-two.jpg';
import CupheadImage from '../../../resources/images/games/cuphead.jpg';
import AWayOutImage from '../../../resources/images/games/a-way-out.jpg';
import OverCookedTwoImage from '../../../resources/images/games/overcooked-2.jpg';
import StardewValleyImage from '../../../resources/images/games/stardew-valley.jpg';
import UnravelTwoImage from '../../../resources/images/games/unravel-two.jpg';
import Game from 'components/elements/game';
import { GameStatus } from 'enums/GameStatus';
const MinecraftImageLibrary = () => {
  return (
    <div className="grid grid-rows-2 w-full grid-flow-col bg-gray">
      <Game gameStatus={GameStatus.Completed} name="It Takes Two" playlistLink="https://www.youtube.com/playlist?list=PLLAhYom1S-4NPSgJxcpfdf_so9w8dAVlG" imgSrc={ItTakesTwoImage}></Game>
      <Game gameStatus={GameStatus.NowPlaying} name="A way out" imgSrc={AWayOutImage}></Game>
      <Game gameStatus={GameStatus.UpNext} name="Minecraft Dungeon" imgSrc={MinecraftImage}></Game>
      <Game gameStatus={GameStatus.UpNext} name="Overcooked 2" imgSrc={OverCookedTwoImage}></Game>
      <Game name="Cuphead" imgSrc={CupheadImage}></Game>
      <Game name="Don't Starve Together" imgSrc={DontStarveTogetherImage}></Game>
      <Game name="Stardew Valley" imgSrc={StardewValleyImage}></Game>
      <div className="border border-amber-200 opacity-30">
        <Image
          src={UnravelTwoImage}
          alt="Unravel Two"
          layout='responsive'
        ></Image>
      </div>
    </div>
  )
}

export default MinecraftImageLibrary
