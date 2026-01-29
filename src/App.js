import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Resources from "./Pages/Resources";
import Show from "./Pages/Show";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resources" element={<Resources />} />
           <Route path="/resources/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;


// Next time: make resources page look nicer (CSS)
