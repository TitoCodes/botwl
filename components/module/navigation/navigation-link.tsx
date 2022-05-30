import Link from 'next/link'
const NavigationLink = () => {
  return (
    <>
      <Link href="/" >
        <a className="hover:text-green-200">Home</a>
      </Link>
      <Link href="/games" >
        <a className="hover:text-green-200">Games</a>
      </Link>
      <Link href="/about">
        <a className="hover:text-green-200">About</a>
      </Link>
      {/* <Link href="/deep-dive">
        <a>Deep Dive</a>
      </Link> */}
      <Link href="/policy">
        <a className="hover:text-green-200">Policy</a>
      </Link>
    </>
  )
}

export default NavigationLink
