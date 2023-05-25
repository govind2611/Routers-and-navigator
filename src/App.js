import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navigation from "./pages/Navigation";
import { Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Products from "./Pages2/Products";
import Apple from "./Pages2/Apple";
import Oneplus from "./Pages2/Oneplus";
import Samsung from "./Pages2/Samsung";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>

      <Routes>
        <Route path="/" element={<Products />}>
          <Route path="apple" element={<Apple />} />
          <Route path="oneplus" element={<Oneplus />} />
          <Route path="samsung" element={<Samsung />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
