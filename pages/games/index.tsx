import type { NextPage } from 'next';
import Layout from '../../components/layout/layout';
import Head from 'next/head';
import GameInfo from 'components/elements/game-info';
import { gameList } from 'data/gameList';
import Dropdown from 'components/elements/dropdown';
import { GameStatus } from 'enums/GameStatus';
import { useState, useEffect } from 'react';
import GameModel from 'model/GameModel';


let games = [...gameList];
const Games: NextPage = () => {

    const [gameLists, setGameLists] = useState(games);

    const handleSelectedChange = (status: GameStatus) => {
        setGameLists(games.filter(a => a.gameStatus == status));
    };

    useEffect(() => {
        console.log('called')
        setGameLists(games.filter(a => a.gameStatus == GameStatus.New));
    },[])

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
                    gameLists.map(game => (
                        <GameInfo model={game} key={game.name}></GameInfo>
                    ))
                }
            </div>
        </Layout>

    )
}

export default Games
