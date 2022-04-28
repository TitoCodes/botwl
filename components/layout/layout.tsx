import Footer from "../module/footer/footer";
import Navigation from "components/module/navigation/navigation";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-row">
      <div className="basis-2/12"></div>
      <div className="basis-5/6 main-container">
        <Navigation></Navigation>
        <main>{children}</main>
        <Footer></Footer>
      </div>
      <div className="basis-2/12"></div>
    </div>
  )
}

export default Layout
