import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import ViewResources from "./components/ViewResources.jsx";
import ViewResource from "./components/ViewResource.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resources" element={<ViewResources />} />
        <Route path="/resource/:id" element={<ViewResource />} />
      </Routes>
    </>
  );
}

export default App;
