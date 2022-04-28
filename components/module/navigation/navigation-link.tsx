import Link from 'next/link'
const NavigationLink = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      {/* <Link href="/deep-dive">
        <a>Deep Dive</a>
      </Link> */}
      <Link href="/policy">
        <a>Policy</a>
      </Link>
    </>
  )
}

export default NavigationLink
