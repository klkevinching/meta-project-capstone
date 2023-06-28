import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Home from './routes/Home';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservations from './routes/Reservations';
import Orderonline from './routes/Orderonline';
import Login from './routes/Login';
import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Main() {
  return (
    <Box component="main" sx={{ pt: "65px", minHeight: "600px" }}>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/orderonline" element={<Orderonline />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Container>
    </Box>
    // <main style={{minHeight: "400px", paddingTop: "75px"}}>
    // </main>
  );
}

export default Main;
