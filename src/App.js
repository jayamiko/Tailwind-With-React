// Import React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import LandingPage from './Pages/LandingPage/Landing'
import Index from './Pages/Index/Index';
import Junior from './Components/Latihan/Junior/junior';
import Middle from './Components/Latihan/Count';
import API from './Components/Latihan/Axios/getQuran';
import ListItem from './Components/Latihan/Middle/TambahHapus';
import FetchAPI from './Components/Latihan/Middle/AxiosGet';

// Import Style
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route */}
        <Route path="/" element={<Index />} />
        <Route exact path="/landing" element={<LandingPage />} />
        <Route exact path="/junior" element={<Junior />} />
        <Route exact path="/middle" element={<Middle />} />
        <Route exact path="/api" element={<API />} />
        <Route exact path="/list" element={<ListItem />} />
        <Route exact path="/fetchapi" element={<FetchAPI />} />
      </Routes>
    </Router>
  );
}

export default App;
