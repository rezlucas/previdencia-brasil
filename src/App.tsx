import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicePage from "./ServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
