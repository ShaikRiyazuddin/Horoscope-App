import './App.css';
import {Home} from "./components/home";
import {Routes, Route} from "react-router-dom"
import {HoroDetails} from "./components/horoDetails";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horo" element={<HoroDetails />} />
      </Routes>
    </div>
  );
}

export default App;
