import './Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "customwhite.main",
          py: "3rem",
        }}>
          <Container>
            <Box
              component="section"
              sx={{
                display: "flex",
                flexDirection: 'column',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={5} lg={6}>
                  <Typography component="h1" variant="displayTitle" sx={{ color: "secondary.main", lineHeight: "1" }}>
                    Little Lemon
                  </Typography>
                  <Typography component="h2" variant="subTitle" sx={{ color: "customwhite.main" }}>
                  Chicago
                  </Typography>
                  <Typography component="p" variant="leadText" sx={{ color: "customwhite.main", pt: "2rem", pb: "1.5rem" }}>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                  </Typography>
                  <Button component={Link} to={'/reservations'} variant="contained" color="secondary">Reserve a Table</Button>
                </Grid>
                <Grid item xs={12} md={7} lg={5} sx={{ position: "relative" }}>
                  <Box sx={{ position: {md: "absolute"}, left: {xs: "auto", md: "20%", lg: "25%"} }}>
                    <img src="/images/hero.jpg" alt="Our signature Toast" className="hero-img" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
      </Box>
    </>
  );
}

export default Home;
