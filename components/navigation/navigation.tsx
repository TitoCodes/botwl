import Link from 'next/link'
import './navigation.module.css';
import Image from 'next/image';
import LogoImage from '../../resources/images/logo/logo.gif'

const Navigation = () => {
  return (
    <nav className='navigation-container flex flex-row pt-6 pb-6 text-sm'>
      <div className='basis-3/5 pl-10'>
        <Link href="/">
          <a><Image
            src={LogoImage}
            alt="Be Our Third Wheel"
            width={52}
            height={44}>
          </Image>
          </a>
        </Link>
      </div>
      <div className='basis-2/5 flex justify-evenly'>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/deep-dive">
          <a>Deep Dive</a>
        </Link>
        <Link href="/policy">
          <a>Policy</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
