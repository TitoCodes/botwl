import GameModel from "model/GameModel";
import Image from "next/image";

const GameInfo = ({ model }: { model: GameModel }) => {
    return (
        <div className='grid xs:grid-col-2 xs:grid-flow-col xl:grid-row-1 xs:gap-4 xl:gap-0'>
            <div className='h-32 w-32 relative'>
                <a href={model.playlistLink} className="cursor-pointer" target="_blank" rel="noreferrer">
                    <Image
                        src={model.imageSrc}
                        alt={model.name}
                        layout='fill'
                        objectFit='cover'
                        placeholder='blur'
                    ></Image>
                </a>
            </div>

            <div className="container">
                <a href={model.playlistLink} className="cursor-pointer" target="_blank" rel="noreferrer">
                    <h2 className="font-bold font-roboto sm:text-base xl:text-xl pt-2 pb-2 text-pink-100 hover:text-green-400">{model.name}</h2>
                </a>
                <div className="font-roboto w-72">
                {model.description}
                </div>
                
            </div>
        </div>
    )
}

export default GameInfo