import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Home";
// import CreateSciPlan from "./pages/createSciPlan";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateSciPlan from "./pages/createSciPlan";
import SciPlans from "./pages/SciPlans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sciPlans/:planNo" element={<SciPlans/>} />
        <Route path="/sciPlans" element={<SciPlans />} />
        <Route path="/createSciPlan" element={<CreateSciPlan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
