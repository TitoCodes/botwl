import GameStatusBadge from "./game-status-badge";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GameStatus } from "enums/GameStatus";
import GameModel from "model/GameModel";

const Game = ({ model }: { model: GameModel }) => {

    const [bgColor, setBgColor] = useState("");
    const [statusLabel, setStatusLabel] = useState("");
    const [opacity, setOpacity] = useState("opacity-30");

    function determineGameStatusColor() {
        switch (model.gameStatus) {
            case GameStatus.UpNext:
                setBgColor("bg-indigo-100");
                setStatusLabel("UP NEXT");
                setOpacity("opacity-50")
                break;
            case GameStatus.Completed:
                setBgColor("bg-green-600");
                setStatusLabel("COMPLETED");
                setOpacity("opacity-100")
                break;
            case GameStatus.NowPlaying:
                setBgColor("bg-red-600");
                setStatusLabel("NOW PLAYING");
                setOpacity("opacity-100")
                break;
            default:
                break;
        }
    }

    function displayStatusBadge(gamestatus: number) {
        return gamestatus != undefined ? <GameStatusBadge status={statusLabel} bgColor={bgColor}></GameStatusBadge> : "";
    }

    useEffect(() => {
        determineGameStatusColor();
    })

    return (
        <div className={`relative border border-amber-200 ${opacity}`}>
            <a href={model.playlistLink} target="_blank" rel="noreferrer">

                {displayStatusBadge(model.gameStatus)}
                <Image
                    src={model.imageSrc}
                    alt={model.name}
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                ></Image>
            </a>
        </div>
    )
}

export default Game
