import { useState } from 'react';
import Sectioncontainer from '../Sectioncontainer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

function Reservations() {
  const [date, setDate] = useState(dayjs())
  const [time, setTime] = useState(1100)
  const [diner, setDiner] = useState(1)
  const [seating, setSeating] = useState("standard")
  const bookingDateMax = new Date();
  bookingDateMax.setDate(bookingDateMax.getDate() + 14);

  const clearForm = () => {
    setDate(dayjs());
    setTime(1100);
    setDiner(1);
    setSeating("standard");
  }

  const handleSubmit = e => {
    e.preventDefault();
    clearForm();
  }

  return (
    <>
      <Sectioncontainer bgColor="primary.main" txtColor="common.white">
        <Container>
          <Typography component="h1" variant="displayTitle">
            Reservations
          </Typography>
        </Container>
      </Sectioncontainer>
      <Sectioncontainer bgColor="common.white" txtColor="common.black">
        <Container maxWidth="sm">
          <Box>
            <form onSubmit={handleSubmit}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  minDate={dayjs()}
                  maxDate={dayjs(bookingDateMax)}
                  label="Date"
                  value={date}
                  onChange={e => setDate(e)}
                  sx={{ width: "100%", mb: "2rem" }}
                />
              </LocalizationProvider>
              <FormControl fullWidth sx={{ mb: "2rem" }}>
                <TextField
                  id="outlined-select-currency"
                  select
                  value={time}
                  label="Time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                >
                  <MenuItem value={1100}>11:00am</MenuItem>
                  <MenuItem value={1200}>12:00pm</MenuItem>
                  <MenuItem value={1300}>1:00pm</MenuItem>
                  <MenuItem value={1400}>2:00pm</MenuItem>
                  <MenuItem value={1500}>3:00pm</MenuItem>
                  <MenuItem value={1600}>4:00pm</MenuItem>
                  <MenuItem value={1700}>5:00pm</MenuItem>
                  <MenuItem value={1800}>6:00pm</MenuItem>
                  <MenuItem value={1900}>7:00pm</MenuItem>
                  <MenuItem value={2000}>8:00pm</MenuItem>
                  <MenuItem value={2100}>9:00pm</MenuItem>
                </TextField>
              </FormControl>
              <FormControl fullWidth sx={{ mb: "2rem" }}>
                <TextField
                  id="outlined-select-currency"
                  select
                  value={diner}
                  label="No. of Diners"
                  onChange={(e) => {
                    setDiner(e.target.value);
                  }}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </TextField>
              </FormControl>
              <FormControl sx={{ mb: "2rem" }}>
                <FormLabel id="demo-radio-buttons-group-label">Seating options</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  value={seating}
                  onChange={(e) => {
                    setSeating(e.target.value);
                  }}
                >
                  <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                  <FormControlLabel value="outdoor" control={<Radio />} label="Outdoor" />
                </RadioGroup>
              </FormControl>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button component="button" type="submit" variant="contained">Make a Reservation</Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Sectioncontainer>
    </>
  );
}

export default Reservations;
