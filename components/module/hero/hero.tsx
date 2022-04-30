import Player1Image from '../../../resources/images/hero/male.gif'
import Player2Image from '../../../resources/images/hero/female.gif'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-center pl-2 pt-12 pr-2 xs:pr-0'>
      <Image
        className='basis-1/6'
        src={Player1Image}
        alt="Player 1"
        width={190}
        placeholder='empty'
        height={200}>
      </Image>
      <div className='xs:text-3xl text-lg italic font-roboto font-light text-pink-100 w-56 xs:w-60 self-center pl-2 pr-2 xs:pr-0'>
        The couple
        that plays together
        stays together.
      </div>
      <Image
        className='basis-1/6'
        src={Player2Image}
        alt="Player 2"
        width={150}
        height={200}>
      </Image>
    </div>
  )
}

export default Hero
