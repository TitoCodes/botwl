import Footer from "../module/footer/footer";
import Navigation from "components/module/navigation/navigation";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-row">
      <div className="basis-0 xs:basis-1/12"></div>
      <div className="basis-full xs:basis-5/6 main-container">
        <Navigation></Navigation>
        <main>{children}</main>
        <Footer></Footer>
      </div>
      <div className="basis-0 xs:basis-1/12"></div>
    </div>
  )
}

export default Layout
