import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import HomePage from "./component/HomePage";
import AboutMe from "./component/AboutMe";
import Project from "./component/Project";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Project />
      <Footer />

      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contactMe" element={<Footer />} /> */}
      </Routes>
    </>
  );
}

export default App;
