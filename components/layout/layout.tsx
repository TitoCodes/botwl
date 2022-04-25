import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5"></div>
      <div className="basis-3/5 main-container">
        <Navigation></Navigation>
        <main>{children}</main>
        <Footer></Footer>
      </div>
      <div className="basis-1/5"></div>
    </div>
  )
}

export default Layout
