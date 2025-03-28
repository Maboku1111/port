import Header from "../components/Header";
import Hero from "../components/Hero";
import Blog from "../components/Blog";

const Layout = () => {
    return (
        <>
            <div className="nav-container">
                <Header />
            </div>
            <div className="container">
                <Hero />
                <Blog />
            </div>
        </>
    )
}

export default Layout;