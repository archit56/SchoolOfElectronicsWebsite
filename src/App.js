import "./styles.css";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import Home from "./components/ui/home";
import About from "./components/ui/about";
import Announcements from "./components/ui/announcements";
import Campus from "./components/ui/campus";
import Login from "./components/ui/login";
import Event from "./components/ui/event";

import { Routes, Route } from "react-router-dom";
import Resources from "./components/ui/resources";
export default function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/event" element={<Event />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}
