import GameModel from "model/GameModel";
import Image from "next/image";
import SubHeader from "./sub-header";

const GameInfo = ({ model }: { model: GameModel }) => {
    return (
        <div className='grid grid-col-2 grid-flow-col gap-4'>
            <div className='h-32 w-32 relative'>
                <Image
                    src={model.imageSrc}
                    alt={model.name}
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                ></Image>
            </div>

            <div>
                <SubHeader title={model.name}></SubHeader>
                {model.description}
            </div>
        </div>
    )
}

export default GameInfo