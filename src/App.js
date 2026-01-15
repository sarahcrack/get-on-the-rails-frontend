import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Resources from "./Pages/Resources";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;


// Next time: create routes for individual show pages
// After that: grid for laying out cards in a nice way
