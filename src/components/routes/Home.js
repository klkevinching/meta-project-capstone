import './Home.css';
import Sectioncontainer from '../Sectioncontainer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from "react-router-dom";

const highlightData = [
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

const testmlData = [
  {
    name: "Brooklyn Welsh",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet",
    image: "/images/testml-1.jpg"
  },
  {
    name: "Anika Thomson",
    rating: 5,
    comment: "Inceptos nec cubilia!",
    image: "/images/testml-2.jpg"
  },
  {
    name: "Marilyn Holder",
    rating: 4,
    comment: "Bibendum nulla aenean quisque",
    image: "/images/testml-3.jpg"
  },
  {
    name: "Roger Boyd",
    rating: 4.5,
    comment: "Suspendisse dignissim!",
    image: "/images/testml-4.jpg"
  },
]

const TestmlRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#495E57',
  },
});

function Hero() {
  return(
    <Sectioncontainer txtColor="common.white" bgColor="primary.main">
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
              <Typography component="h2" variant="subTitle">
                Chicago
              </Typography>
              <Typography component="p" variant="leadText" sx={{ pt: "2rem", pb: "1.5rem" }}>
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
    </Sectioncontainer>
  )
}

function Highlight(props) {
  const cardData = highlightData
  return(
    <Sectioncontainer txtColor="common.black" bgColor="common.white">
      <Container>
        <Box sx={{ display: {md:"flex"}, justifyContent: "space-between", alignItems: "center", pb: "4rem" }}>
          <Typography component="h1" variant="displayTitle" sx={{ lineHeight: "1.2", py: "1rem" }}>This Week's Specials!</Typography>
          <div>
            <Button component={Link} to={'/menu'} variant="contained" color="secondary">Online Menu</Button>
          </div>
        </Box>
        <Grid container spacing={2}>
          {
            cardData.map(item => (
              <Grid item xs={12} md={4} key={item.name} sx={{ mb: "2rem" }}>
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
        </Grid>
      </Container>
    </Sectioncontainer>
  )
}

function Testimonials() {
  return(
    <Sectioncontainer txtColor="common.black" bgColor="secondary.main">
      <Container>
        <Typography component="h1" variant="displayTitle" sx={{ color: "primary.main", textAlign: "center" }}>
          Testimonials
        </Typography>
        <Grid container sx={{ mt: "2rem" }} className="testml-review">
          {
            testmlData.map(item => (
              <Grid component="article" item key={item.name} xs={12} sm={6} lg={3} sx={{ px: "1.5rem", py: "1rem", mb: "2rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: ".75rem" }}>
                  <Box sx={{ mr: "1rem" }}>
                    <Avatar alt="Remy Sharp" src={item.image} sx={{ width: 72, height: 72 }} />
                  </Box>
                  <Box>
                    <Typography component="h2" variant='highlightText'>{item.name}</Typography>
                  </Box>
                </Box>
                <TestmlRating readOnly name="half-rating" defaultValue={item.rating} precision={0.5} />
                <Typography>
                  <i><span style={{ marginRight: ".25rem" }}>"</span>
                  {item.comment}
                  <span style={{ marginLeft: ".25rem" }}>"</span>
                  </i>
                </Typography>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Sectioncontainer>
  )
}

function Aboutus() {
  return(
    <Sectioncontainer txtColor="common.black" bgColor="common.white">
      <Container>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={5} lg={6}>
            <Typography component="h1" variant="displayTitle" sx={{ color: "primary.main" }}>
              About Us
            </Typography>
            <Typography sx={{ mt: "2rem" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, duis nisi interdum quam himenaeos fermentum, turpis ridiculus sem orci molestie vulputate. Proin quisque vel tempor ridiculus montes ultrices duis, molestie fringilla eu at tincidunt sodales, nullam faucibus nisl euismod vitae laoreet.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <div className="about-img">
              <div className="about-img__item about-img__item--top">
                <img src="/images/About-top.jpg" alt="Photo of our professional team of chef"/>
              </div>
              <div className="about-img__item about-img__item--bottom">
                <img src="/images/About-bottom.jpg" alt="Photo of our professional team of chef" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Sectioncontainer>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <Box sx={{ mb: {md: "50px"} }}></Box>
      <Highlight />
      <Testimonials />
      <Aboutus />
    </>
  );
}

export default Home;
