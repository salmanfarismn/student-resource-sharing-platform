import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewResources from "./components/ViewResources";
import ViewResource from "./components/ViewResource";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewResources />} />
        <Route path="/resource/:id" element={<ViewResource />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;