import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen">
      <Header />
      <Hero />

      <div className="bg-red-500 text-blue p-4">
        If you see this, Tailwind is working!
      </div>
    </div>
  );
}

export default App;
