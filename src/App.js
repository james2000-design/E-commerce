import Section from "./component/Section/Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <States /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/section" element={<Section />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
