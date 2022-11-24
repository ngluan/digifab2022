import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
// import Header from "./Components/Header";
import Layout from "./Components/Layout";
import About from "./Components/About";
// import Work from "./Components/Work";
import Home from "./Components/Home";
import Picture from "./Components/Picture";
import Skills from "./Components/Skills";
import Digifab3D from "./Components/Digifab3D"


export default function App() {
  return (
    <>
      <Navigation />
      {/* <Header /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/digifab2022" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pictures" element={<Picture />} />
          {/* <Route path="/works" element={<Work />} /> */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/digifab3d" element={<Digifab3D />} />
        </Route>
      </Routes>
    </>
  );
}
