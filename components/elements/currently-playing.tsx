import GameStatusBadge from "./game-status-badge";
import Image from "next/image";

const CurrentlyPlaying = ({ imgSrc, name, playlistLink }: any) => {
    return (
        <><a href={playlistLink} target="_blank" rel="noreferrer">
            <GameStatusBadge status="NOW PLAYING" bgColor="bg-red-600"></GameStatusBadge>
            <Image
                src={imgSrc}
                alt={name}
                layout='fill'
                objectFit='cover'
                placeholder='blur'
            ></Image>
        </a>
        </>
    )
}

export default CurrentlyPlaying
