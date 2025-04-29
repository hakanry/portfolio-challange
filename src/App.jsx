import TopComp from "./components/TopComp";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <>
      <div>
        <TopComp />
        <Header />
        <Hero />
        <Skills />
        <Profile />
      </div>
    </>
  );
}

export default App;
