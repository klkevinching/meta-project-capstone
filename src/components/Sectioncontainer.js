import Box from '@mui/material/Box';

function Sectioncontainer(props) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: props.bgColor,
        color: props.txtColor,
        py: "3rem",
      }}>
        {props.children}
    </Box>
  )
}

export default Sectioncontainer;