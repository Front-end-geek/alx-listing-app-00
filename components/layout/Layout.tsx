import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC <{children: React.ReactNode }> = ({children}) => (
    <>
    <Header/>
    <main className="min-h-screen text-black">{children}</main>
    <Footer/>
    </>
)
export default Layout;