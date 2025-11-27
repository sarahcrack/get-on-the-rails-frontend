import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./Pages/Homepage";
import Resources from "./Pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
