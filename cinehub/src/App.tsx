// Routes
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";

// Componenets
import Navbar from "./components/Navbar";

// Services

const App = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen overflow-hidden ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
};

export default App;
