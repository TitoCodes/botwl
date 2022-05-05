import Footer from "../module/footer/footer";
import Navigation from "components/module/navigation/navigation";
import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://beourthirdwheel.com/home.png" />
        <meta property="og:url" content='https://beourthirdwheel.com/' />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
      </Head>
      <div className="flex flex-row">
        <div className="basis-0 xs:basis-1/12"></div>
        <div className="basis-full xs:basis-5/6 main-container">
          <Navigation></Navigation>
          <main>{children}</main>
          <Footer></Footer>
        </div>
        <div className="basis-0 xs:basis-1/12"></div>
      </div>
    </>
  )
}

export default Layout
