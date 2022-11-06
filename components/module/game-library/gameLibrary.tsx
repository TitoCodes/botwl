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
    </div>
  )
}

export default GameLibrary
