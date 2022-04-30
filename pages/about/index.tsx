import type { NextPage } from 'next';
import Layout from '../../components/layout/layout';
import Player from '../../components/module/player/player';
import Player1Image from '../../resources/images/hero/male.gif';
import Player2Image from '../../resources/images/hero/female.gif';
import Head from 'next/head';

type PlayerProfileData = {
    name: string,
    favGame: string,
    favCharacter: string,
    favFood: string,
    imageSrc: string,
    position: string,
    backgroundColor: string,
    imageXAxisSize: number,
    imageYAxisSize: number
}

class PlayerProfile {
    name: string;
    favGame: string;
    favCharacter: string;
    favFood: string;
    imageSrc: string;
    position: string;
    backgroundColor: string;
    imageXAxisSize: number;
    imageYAxisSize: number;

    constructor(data: PlayerProfileData) {
        this.name = data.name;
        this.favGame = data.favGame;
        this.favCharacter = data.favCharacter;
        this.favFood = data.favFood;
        this.imageSrc = data.imageSrc;
        this.position = data.position;
        this.backgroundColor = data.backgroundColor;
        this.imageXAxisSize = data.imageXAxisSize;
        this.imageYAxisSize = data.imageYAxisSize;
    }
}

let player1 = new PlayerProfile(
    {
        name: "Reb",
        favGame: "Witcher 3",
        favCharacter: "Geralt",
        favFood: "Salad",
        position: "Player 1",
        imageSrc: Player1Image.src,
        backgroundColor: "bg-pink-200",
        imageXAxisSize: 350.56,
        imageYAxisSize: 320.33
    });

let player2 = new PlayerProfile(
    {
        name: "Val",
        favGame: "Minecraft",
        favCharacter: "Mario",
        favFood: "Ice cream",
        position: "Player 2",
        imageSrc: Player2Image.src,
        backgroundColor: "bg-green-200",
        imageXAxisSize: 218,
        imageYAxisSize: 207.75
    });

const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Be Our Third Wheel - About</title>
            </Head>
            <div className='pt-10 pr-20 pl-20 space-x-60 flex flex-row justify-center'>
                <Player player={player1}></Player>
                <Player player={player2}></Player>
            </div>
        </Layout>
    )
}

export default About
