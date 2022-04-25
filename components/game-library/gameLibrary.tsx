import Image from 'next/image'
import MinecraftImage from '../../resources/images/games/minecraft-dungeon.jpg'
import ItTakesTwoImage from '../../resources/images/games/it-takes-two.jpg'
const MinecraftImageLibrary = () => {
  return (
    <div className="grid grid-rows-2 w-full grid-flow-col bg-gray">
      <div className="relative border border-amber-200">
        <Image
          src={ItTakesTwoImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="relative border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='fill'
        ></Image>
      </div>
      <div className="border border-amber-200 opacity-30">
        <Image
          src={MinecraftImage}
          alt="MinecraftImage dungeon"
          layout='responsive'
        ></Image>
      </div>
    </div>
  )
}

export default MinecraftImageLibrary
