import { Routes as Router, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Router>
    </BrowserRouter>
  );
}
