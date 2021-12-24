// Import React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import LandingPage from './Pages/LandingPage/Landing'
import Index from './Pages/Index/Index';

// Import Style
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route exact path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
