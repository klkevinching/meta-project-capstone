import Sectioncontainer from './Sectioncontainer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Construction(props) {
  return (
    <>
      <Sectioncontainer bgColor="primary.main" txtColor="common.white">
        <Container>
          <Typography component="h1" variant="displayTitle">
            {props.pageName}
          </Typography>
        </Container>
      </Sectioncontainer>
      <Sectioncontainer bgColor="common.white" txtColor="common.black">
        <Container>
          This page is under construction. Please come back again later!
        </Container>
      </Sectioncontainer>
    </>
  )
}

export default Construction;