const GameStatusBadge = ({ status, bgColor }: any) => {
    return (
        <span className={`w-20 absolute font-roboto z-10 text-2xs py-1 px-2.5 leading-none drop-shadow-lg text-center whitespace-nowrap align-baseline font-bold ${bgColor} text-white`}>
            <span className='drop-shadow-2xl'>{status}</span>
        </span>
    )
}

export default GameStatusBadge
