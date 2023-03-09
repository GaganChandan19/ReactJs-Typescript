import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Country from "./pages/Country";
import Weather from "./pages/Weather";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:country" element={<Country />} />
        <Route path="/weather/:capital" element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;
