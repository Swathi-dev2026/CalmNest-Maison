import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <p className="hero-label">WELCOME TO CALMNEST MAISON</p>

        <h1>
          Create a home
          <br />
          that feels like you.
        </h1>

        <p className="hero-description">
          Thoughtful spaces, beautiful details and
          everyday inspiration for a life well lived.
        </p>

        <button className="hero-button">
          EXPLORE OUR WORLD
        </button>
      </section>
    </main>
  );
}

function Placeholder({ title }) {
  return (
    <main className="placeholder-page">
      <h1>{title}</h1>
      <p>Something beautiful is coming soon.</p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-decor" element={<Placeholder title="Home Decor" />} />
        <Route path="/organization" element={<Placeholder title="Organization" />} />
        <Route path="/fashion" element={<Placeholder title="Fashion" />} />
        <Route path="/shop" element={<Placeholder title="Shop Our Finds" />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="/privacy-policy" element={<Placeholder title="Privacy Policy" />} />
        <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
        <Route path="/affiliate-disclosure" element={<Placeholder title="Affiliate Disclosure" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
