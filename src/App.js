import { Routes, Route } from "react-router";

import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./components/Header/Header";
import AboutIconLink from "./components/AboutIconLink/AboutIconLink";

export default function App() {
  return (
    <>
      <Header heading="Feedback UI" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <AboutIconLink />
    </>
  );
}
