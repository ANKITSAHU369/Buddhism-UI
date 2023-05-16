import "./App.css";
import MainSection from "./Components/MainSection";
import LandingSection from "./Components/LandingSection";
import { useState } from "react";
import SourcesSection from "./Components/SourcesSection";
import PreceptsSection from "./Components/PreceptsSection";
import Navbar from "./Components/Navbar";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ConclustionSection from "./Components/ConclusionSection";

function App() {
  const [vow, setVow] = useState(false);

  const [navClass, setNavClass] = useState("tempClass");
  const [openSection, setOpenSecion] = useState(false);
  console.log("vow ", vow);

  return (
    <div className="App">
      <LandingSection setVow={setVow} setOpenSecion={setOpenSecion} />
      {openSection && (
        <>
          <MainSection vow={vow} setVow={setVow} />
          <PreceptsSection />
          <ConclustionSection />
          <SourcesSection />
        </>
      )}

      <button
        onClick={() =>
          setNavClass((prev) =>
            prev === "navbarInc" ? "navbarDec" : "navbarInc"
          )
        }
        className={`navBtn ${
          navClass === "navbarInc" ? "closeNavBtn" : "openNavBtn"
        }`}
      >
        <div>
          <ChevronRightIcon sx={{ fontSize: [35] }} />
        </div>
      </button>
      <Navbar
        navClass={navClass}
        setVow={setVow}
        setNavClass={setNavClass}
        setOpenSecion={setOpenSecion}
      />
    </div>
  );
}

export default App;
