import Link from 'next/link'
import './navigation.module.css';
import Image from 'next/image';
import LogoImage from 'resources/images/logo/logo.gif';
import NavigationLink from 'components/module/navigation/navigation-link';
import { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuExpanded, setMobileMenuExpanded] = useState<boolean>(false);
  let handleMobileMenuClick = () => {

    if (!isMobileMenuExpanded) {
      setMobileMenuExpanded(true);
    }else{
      setMobileMenuExpanded(false);
    }
  };

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
      <div className='basis-full xs:basis-2/5 grid justify-items-stretch'>
        <div className="xs:hidden justify-self-end basis-full pr-5">
          <button onClick={handleMobileMenuClick} className="flex items-center px-3 py-2 border rounded text-pink-100 border-pink-100 hover:text-pink-100 hover:border-pink-100">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div className='xs:flex flex-auto justify-evenly font-bold hidden'>
          <NavigationLink></NavigationLink>
        </div>

        <div className={`flex flex-col basis-full pl-5 text-pink-100 pt-5 text-sm space-y-1 font-bold ${isMobileMenuExpanded ? 'visible' : 'hidden'}`}>
          <NavigationLink></NavigationLink>
        </div>

      </div>
    </nav>
  )
}

export default Navigation
