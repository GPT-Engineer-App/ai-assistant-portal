import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
