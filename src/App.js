import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
