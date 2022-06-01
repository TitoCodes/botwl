import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
    faCaretDown,
    faCaretUp
} from "@fortawesome/free-solid-svg-icons"
import { GameStatus } from "enums/GameStatus";

const Dropdown = ({onChange}:any) => {
    const [isListHidden, setListHidden] = useState('hidden');
    const [currentStatus, setCurrentStatus] = useState(GameStatus.New);
    const [currentStatusLabel, setCurrentStatusLabel] = useState(GameStatus[GameStatus.New]);


    const handleResetClick = async () => {
        if (isListHidden === '') {
            setListHidden('hidden');
        } else {
            setListHidden('');
        }
    }

    const handleSetCurrentStatusClick = async (status:GameStatus) => {
        setCurrentStatus(status);
        setCurrentStatusLabel(GameStatus[status]);
        setListHidden('hidden');
        onChange(status)
    }

    return (
        <div className="ml-20 w-40">
            <button type="button" onClick={handleResetClick} className='rounded-md bg-gray p-1 pr-6 pl-6 w-40'>
                <span className='text-pink-100'>{currentStatusLabel}</span>
                <FontAwesomeIcon className='text-pink-100 pl-3' icon={isListHidden ? faCaretDown: faCaretUp} />
            </button>
            <ul className={`${isListHidden} text-center pt-4 mr-6`}>
                <li onClick={() => handleSetCurrentStatusClick(GameStatus.New)} className="text-pink-100 hover:cursor-pointer hover:text-green-400">{GameStatus[GameStatus.New]}</li>
                <li onClick={() => handleSetCurrentStatusClick(GameStatus.NowPlaying)} className="text-pink-100 hover:cursor-pointer hover:text-green-400">{GameStatus[GameStatus.NowPlaying]}</li>
                <li onClick={() => handleSetCurrentStatusClick(GameStatus.Completed)} className="text-pink-100 hover:cursor-pointer hover:text-green-400">{GameStatus[GameStatus.Completed]}</li>
            </ul>
        </div>
    )
}

export default Dropdown