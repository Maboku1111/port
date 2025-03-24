import Header from "../components/Header";
import Hero from "../components/Hero";
import Blog from "../components/Blog";

const Layout = (params) => {
    return (
        <>
            <div>
                <Header />
                <Hero />
                <Blog />
            </div>
        </>
        
    )
}

export default Layout;