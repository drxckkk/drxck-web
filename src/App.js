import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";

function App() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
