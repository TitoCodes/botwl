import Image from 'next/image';
import GameStatusBadge from 'components/elements/game-status-badge';
import MinecraftImage from '../../../resources/images/games/minecraft-dungeon.jpg';
import ItTakesTwoImage from '../../../resources/images/currently-playing/it-takes-two.jpg';
import CupheadImage from '../../../resources/images/games/cuphead.jpg';
import AWayOutImage from '../../../resources/images/games/a-way-out.jpg';
import OverCookedTwoImage from '../../../resources/images/games/overcooked-2.jpg';
import DiabloThreeImage from '../../../resources/images/games/diablo-3.jpg';
import StardewValleyImage from '../../../resources/images/games/stardew-valley.jpg';
import UnravelTwoImage from '../../../resources/images/games/unravel-two.jpg';
import CurrentlyPlaying from 'components/elements/currently-playing';
const MinecraftImageLibrary = () => {
  return (
    <div className="grid grid-rows-2 w-full grid-flow-col bg-gray">
      <div className="relative border border-amber-200">
        <CurrentlyPlaying name="It Takes Two" playlistLink="https://www.youtube.com/playlist?list=PLLAhYom1S-4NPSgJxcpfdf_so9w8dAVlG" imgSrc={ItTakesTwoImage}></CurrentlyPlaying>
      </div>
      <div className="relative border border-amber-200 opacity-50">
        <GameStatusBadge status="UP NEXT" bgColor="bg-indigo-100"></GameStatusBadge>
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
          placeholder='blur'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={CupheadImage}
          alt="Cuphead"
          layout='fill'
          placeholder='blur'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={AWayOutImage}
          alt="A way out"
          layout='fill'
          placeholder='blur'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={OverCookedTwoImage}
          alt="Overcooked 2"
          layout='fill'
          placeholder='blur'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={DiabloThreeImage}
          alt="Diablo 3"
          layout='fill'
          placeholder='blur'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={StardewValleyImage}
          alt="Lego Marvel collection"
          layout='fill'
          placeholder='blur'
        ></Image>
      </div>
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
