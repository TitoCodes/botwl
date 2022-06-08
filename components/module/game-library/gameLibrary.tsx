import Image from 'next/image';
import UnravelTwoImage from '../../../resources/images/games/unravel-two.jpg';
import Game from 'components/elements/game';
import GameModel from 'model/GameModel';


const GameLibrary = ({games}:{games:GameModel[]}) => {
  return (
    <div className="grid grid-rows-2 w-full grid-flow-col bg-gray">
      {
        games.map(game => (
          <Game model={game} key={game.name}></Game>
        ))
      }
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

export default GameLibrary
