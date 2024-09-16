import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Data from "./routes/Data";
import Home from "./routes/Home";
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}
export default App;