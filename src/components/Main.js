import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Main() {
  return (
    <main style={{minHeight: "400px"}}>
      <h1 className="txt-primary"><Typography variant='subTitle'>Test</Typography></h1>
      <Button color="customsalmon">Secondary</Button>
    </main>
  );
}

export default Main;
