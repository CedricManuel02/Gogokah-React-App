import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/info/:id/:videoId" element={<Info/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
