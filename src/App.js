import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./Pages/Homepage";

function App() {
  return (
  <BrowserRouter>
  <div className="App">
  <Routes>
  <Route exact path="/" element={< Homepage/>} />
  </Routes>
  </div>
  </BrowserRouter>
    );
  }

export default App;
