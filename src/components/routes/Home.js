import './Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from "react-router-dom";


function Home() {
  const highlightsCardData = [
    {
      name: "Dish Item A",
      price: 10,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper, vulputate lectus accumsan facilisi dictumst cursus.",
      image: "/images/card-1.jpg"
    },
    {
      name: "Dish Item B",
      price: 6.5,
      description: "Interdum purus vehicula pulvinar venenatis cum dignissim eleifend quisque, taciti curabitur lacus class molestie potenti id tempus.",
      image: "/images/card-2.jpg"
    },
    {
      name: "Dish Item C",
      price: 9,
      description: "Proin platea purus vehicula eget bibendum felis ligula dui, id a luctus lacinia viverra mollis fames, non aptent sed.",
      image: "/images/card-3.jpg"
    }
  ]

  return (
    <>
      <Box
        component="section"
        sx={{
          bgcolor: "primary.main",
          color: "customwhite.main",
          py: "3rem",
          mb: {md: "50px"}
        }}>
          <Container>
            <Box
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
      <Box
        component="section"
        sx={{
          py: "3rem",
        }}
      >
        <Container>
          <Box sx={{ display: {md:"flex"}, justifyContent: "space-between", alignItems: "center", pb: "4rem" }}>
            <Typography component="h1" variant="displayTitle" sx={{ lineHeight: "1.2", py: "1rem" }}>This Week's Specials!</Typography>
            <div>
              <Button component={Link} to={'/menu'} variant="contained" color="secondary">Online Menu</Button>
            </div>
          </Box>
          <Grid container spacing={2}>
            {
              highlightsCardData.map(item => (
                <Grid item xs={12} md={4}>
                  <Card component="article" sx={{ width: "100%", height: "100%" }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={item.image}
                      title={item.name}
                    />
                    <CardContent>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography gutterBottom variant="cardTitle" component="h2" sx={{ color: "primary.main" }} >
                          {item.name}
                        </Typography>
                        <Typography gutterBottom variant="leadText" sx={{ color: "customsalmon.main" }}>
                          $ {item.price}
                        </Typography>
                      </Box>
                      <Typography>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Order & Delivery <DeliveryDiningIcon sx={{ pl: ".5rem" }} /></Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
            {/* <Grid item xs={12} md={4}>
              <Card component="article" sx={{ width: "100%" }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image="/images/card-1.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "customsalmon.main" }}>
                    <Typography gutterBottom variant="cardTitle" component="h2">
                      Lizard
                    </Typography>
                    <Typography gutterBottom variant="leadText">
                      Lizard
                    </Typography>
                  </Box>
                  <Typography>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Order & Delivery 🡒</Button>
                </CardActions>
              </Card>
            </Grid> */}
            {/* <Grid item xs={12} md={4}>
              B
            </Grid>
            <Grid item xs={12} md={4}>
              C
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
