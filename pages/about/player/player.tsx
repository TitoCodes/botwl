import Image from 'next/image';
import PlayerProfileInfo from 'components/elements/player-profile-info';

const Player = ({ player }: any) => {
    return (
        <div className='flex flex-col items-center'>
            <div className={`overflow-hidden rounded-full border border-indigo-100 w-40 h-40 ${player.backgroundColor}`}>
                <Image
                    src={player.imageSrc}
                    alt={player.position}
                    layout="responsive"
                    objectFit="contain"
                    width={player.imageYAxisSize}
                    height={player.imageXAxisSize}>
                </Image>
            </div>

            <div className='text-3xl bold font-roboto font-bold text-pink-100 pb-12 pt-10'>{player.position}</div>

            <div className='flex flex-col pb-20'>
                <PlayerProfileInfo label="Name" answer={player.name}></PlayerProfileInfo>
                <PlayerProfileInfo label="Fav Game" answer={player.favGame}></PlayerProfileInfo>
                <PlayerProfileInfo label="Fav Char" answer={player.favCharacter}></PlayerProfileInfo>
                <PlayerProfileInfo label="Fav Food" answer={player.favFood}></PlayerProfileInfo>
            </div>
        </div>
    )
}

export default Player