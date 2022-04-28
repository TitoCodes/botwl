const Header = ({ title }: any) => {
    return (
        <div className='flex font-bold xl:text-3xl sm:text-xl text-pink-100 font-roboto italic pb-5'>
            {title}
        </div>
    )
}

export default Header