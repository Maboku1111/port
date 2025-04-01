import Hero from "../../src/components/Hero";
import Blog from "../../src/components/Blog";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero/>
      <Blog />
    </div>
  );
}

export default Home;
