import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      {/* <MovieList /> */}
    </div>
  );
};

export default App;
