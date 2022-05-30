import type { NextPage } from 'next';
import Layout from '../../components/layout/layout';
import Head from 'next/head';
import GameInfo from 'components/elements/game-info';
import DontStarveTogetherImage from '../../resources/images/games/dont-starve-together.jpg';
import MinecraftImage from '../../resources/images/games/minecraft-dungeon.jpg';
import ItTakesTwoImage from '../../resources/images/currently-playing/it-takes-two.jpg';
import CupheadImage from '../../resources/images/games/cuphead.jpg';
import AWayOutImage from '../../resources/images/games/a-way-out.jpg';
import OverCookedTwoImage from '../../resources/images/games/overcooked-2.jpg';
import StardewValleyImage from '../../resources/images/games/stardew-valley.jpg';
import UnravelTwoImage from '../../resources/images/games/unravel-two.jpg';
import Dropdown from 'components/elements/dropdown';
import GameModel from 'model/GameModel';
import { GameStatus } from 'enums/GameStatus';
import { useState, useEffect } from 'react';

let games = [
    new GameModel("It Takes Two", ItTakesTwoImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.Completed),
    new GameModel("Cuphead", CupheadImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("A Way Out", AWayOutImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.NowPlaying),
    new GameModel("Stardew Valley", StardewValleyImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("Don't Starve Together", DontStarveTogetherImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("Overcooked 2", OverCookedTwoImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.NowPlaying),
    new GameModel("Unravel Two", UnravelTwoImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.New),
    new GameModel("Minecraft Dungeons", MinecraftImage, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", GameStatus.NowPlaying),
];

const Games: NextPage = () => {
    const [gameList, setGameLists] = useState(games);

    const handleSelectedChange = (status: GameStatus) => {
        setGameLists(games.filter(a => a.gameStatus == status));
    };

    useEffect(() => {
        setGameLists(games.filter(a => a.gameStatus == GameStatus.NowPlaying));
    }, [])

    return (
        <Layout>
            <Head>
                <title>Be Our Third Wheel - Games</title>
                <meta name="description" content="These are the games we are currently playing and already been completed." />
                <meta name="og:description" content="These are the games we are currently playing and already been completed." />
                <meta name="og:title" content="Be Our Third Wheel - Games" />
            </Head>

            <Dropdown onChange={handleSelectedChange}></Dropdown>
            <div className='m-20 mt-5 grid grid-cols-2 grid-rows-4 grid-flow-col gap-6 '>
                {
                    gameList.map(game => (
                        <GameInfo model={game} key={game.name}></GameInfo>
                    ))
                }
            </div>
        </Layout>

    )
}

export default Games
