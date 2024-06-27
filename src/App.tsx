import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "jotai";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/step/1" element={<Step1 />} />
          <Route path="/step/2" element={<Step2 />} />
          <Route path="/step/3" element={<Step3 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
