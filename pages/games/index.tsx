import type { NextPage } from 'next';
import Layout from '../../components/layout/layout';
import Head from 'next/head';
import GameInfo from 'components/elements/game-info';
import Dropdown from 'components/elements/dropdown';
import { GameStatus } from 'enums/GameStatus';
import { useState, useEffect } from 'react';
import GameModel from 'model/GameModel';

export async function getServerSideProps() {
    const res = await fetch(`${process.env.BACKEND_ENDPOINT}api/games`)
    const data = await res.json()
    return { props: { data } }
}

const Games: NextPage = ({ data }:any) => {

    let games = data as GameModel[];
    const [gameLists, setGameLists] = useState<GameModel[]>(data);
    const [gameStatusLabel, setGameStatusLabel] = useState("");

    const handleSelectedChange = (status: GameStatus) => {
        determineGameStatusLabel(status);
        setGameLists(games.filter(a => a.gameStatus == status));
    };

    function determineGameStatusLabel(status: GameStatus) {
        switch (status) {
            case GameStatus.New:
                setGameStatusLabel("Games that we're going to play soon");
                break;
            case GameStatus.Completed:
                setGameStatusLabel("Games that we've already completed");
                break;
            case GameStatus.NowPlaying:
                setGameStatusLabel("Games that we're currently playing");
                break;
            case GameStatus.UpNext:
                setGameStatusLabel("Games that we're going to play soon");
                break;
        }
    }

    useEffect(() => {
        determineGameStatusLabel(GameStatus.New);
        setGameLists(games.filter(a => a.gameStatus == GameStatus.New));
    },[games])

    return (
        <Layout>
            <Head>
                <title>Be Our Third Wheel - Games</title>
                <meta name="description" content="These are the games we are currently playing and already been completed." />
                <meta name="og:description" content="These are the games we are currently playing and already been completed." />
                <meta name="og:title" content="Be Our Third Wheel - Games" />
            </Head>

            <div className="ml-20 mb-3 w-auto mr-20">
                <h1 className="font-bold font-roboto text-xl pt-2 pb-2 text-gray">{gameStatusLabel}</h1>
            </div>

            <Dropdown onChange={handleSelectedChange}></Dropdown>
            <div className='m-20 mt-6 grid grid-cols-2 grid-rows-4 grid-flow-col gap-6 '>
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
