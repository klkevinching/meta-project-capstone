import './Footer.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";

function Gridcontentbox(props) {
  return (
    <Grid item xs={12} md={3}>
      <Box
        component="section"
        sx={{
          borderBottom: {
            xs: 1,
            md: 0,
          },
          borderColor: {
            xs: "customdarkgrey.light",
            md: "customdarkgrey.light",
          },
          py: "1rem",
        }}
      >
        {props.children}
      </Box>
    </Grid>
  )
}

function Footer(props) {
  const navData = props.navData

  const navElement = navData.map(item => {
    return (
      <ListItem key={item.name} >
        <Link
          component={RouterLink}
          to={item.link}
          underline="hover"
          sx={{
            color: "customwhite.main"
          }}
        >
          {item.name}
        </Link>
      </ListItem>
    )
  })

  return (
    <Box component="footer" sx={{ bgcolor: "customdarkgrey.main", color: "customwhite.main", py: "4rem" }}>
      <Container>
      <Grid container>
        <Grid item xs={12} md={3} sx={{ display:"flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ maxWidth: "50px" }}>
            <img src="/images/logo_v.png" alt="Little Lemon Logo" />
          </Box>
        </Grid>
        <Gridcontentbox>
          <List>
            {navElement}
          </List>
        </Gridcontentbox>
        <Gridcontentbox>
          <Typography component="h2" variant='subTitle' sx={{ px: "1rem" }}>Contact</Typography>
          <List>
            <ListItem>
              <HomeIcon sx={{ mr: ".5rem" }} />Shop 556, Kulas Light, Gwenborough, G12 J56
            </ListItem>
            <ListItem>
              <PhoneIcon sx={{ mr: ".5rem" }} />0112 34567
            </ListItem>
            <ListItem>
              <EmailIcon sx={{ mr: ".5rem" }} /><span style={{ wordBreak: "break-all" }}>info@littlelemon.com</span>
            </ListItem>
          </List>
        </Gridcontentbox>
        <Gridcontentbox>
          <Typography component="h2" variant='subTitle' sx={{ px: "1rem" }}>Follow Us</Typography>
          <List>
            <ListItem>
              <TwitterIcon sx={{ mr: ".5rem" }} />Twitter
            </ListItem>
            <ListItem>
              <InstagramIcon sx={{ mr: ".5rem" }} />Instagram
            </ListItem>
            <ListItem>
              <FacebookIcon sx={{ mr: ".5rem" }} />Facebook
            </ListItem>
          </List>
        </Gridcontentbox>
      </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
