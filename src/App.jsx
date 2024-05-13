import { useState } from "react";
import "./App.css";
import { SemanticForm } from "./components/SemanticForm";
import { NonSemanticForm } from "./components/NonSemanticForm";
import { SVGForm } from "./components/SVGForm";

function App() {
  const [provinces, setProvinces] = useState({
    ab: true,
    bc: false,
    sk: false,
    mb: false,
    on: false,
    qc: false,
    nb: false,
    ns: false,
    pe: false,
    nl: false,
    yt: false,
    nt: false,
    nu: false,
  });

  const handleClick = (e) => {
    let prov = e.target.dataset.prov;
    if (!prov) {
      const parent = e.target.parentElement;
      prov = parent.dataset.prov;
    }

    setProvinces({
      ...provinces,
      [prov]: !provinces[prov],
    });
  };

  const onKeyUp = (e) => {
    if (e.key !== " ") {
      return;
    }

    let prov = e.target.dataset.prov;
    if (!prov) {
      const parent = e.target.parentElement;
      prov = parent.dataset.prov;
    }

    setProvinces({
      ...provinces,
      [prov]: !provinces[prov],
    });
  };

  return (
    <main>
      <h1>Acessible Forms</h1>
      <p>Below are three variations of the same fundamental form.</p>

      <h2>Basic Form using Semantic HTML</h2>
      <SemanticForm />

      <h2>Basic Form using Non-Semantic HTML</h2>
      <NonSemanticForm
        provinces={provinces}
        handleClick={handleClick}
        onKeyUp={onKeyUp}
      />

      <h2>SVG Form</h2>
      <SVGForm
        provinces={provinces}
        handleClick={handleClick}
        onKeyUp={onKeyUp}
      />
    </main>
  );
}

export default App;
