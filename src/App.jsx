import TopComp from "./components/TopComp";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

function App() {
  return (
    <>
      <LanguageProvider>
        <div className="w-[80%] m-auto">
          <TopComp />
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
}

export default App;
