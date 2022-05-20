const GameStatusBadge = ({ status, bgColor }: any) => {
    return (
        <span className={`xs:w-20 w-15 absolute font-roboto z-10 xs:text-2xs text-3xs py-1 px-2.5 leading-none drop-shadow-lg text-center whitespace-nowrap align-baseline font-bold ${bgColor} text-white`}>
            <span className='drop-shadow-2xl'>{status}</span>
        </span>
    )
}

export default GameStatusBadge
