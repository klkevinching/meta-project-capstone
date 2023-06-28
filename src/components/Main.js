import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservations from './routes/Reservations';
import Orderonline from './routes/Orderonline';
import Login from './routes/Login';
import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';

function Main() {
  return (
    <Box component="main" sx={{ pt: "3.5rem", minHeight: "600px" }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/orderonline" element={<Orderonline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Box>
  );
}

export default Main;
