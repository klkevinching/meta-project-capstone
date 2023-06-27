import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#495E57',
    },
    secondary: {
      main: '#F4CE14',
    },
    customsalmon: {
      main: '#EE9972',
    },
    custompeachpuff: {
      main: '#FBDABB',
    },
    customlightgrey: {
      main: '#EDEFEE',
    },
    customdarkgrey: {
      main: '#333333',
    },
    customwhite: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Karla',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    // Font Size: 400-Regular, 500-Medium, 700-Bold, 800-ExtraBold
    displayTitle: {
      fontFamily: 'Markazi',
      fontSize: 64,
      fontWeight: 500,
    },
    subTitle: {
      fontFamily: 'Markazi',
      fontSize: 40,
      fontWeight: 400,
    },
    leadText: {
      fontSize: 18,
      fontWeight: 500,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 800,
    },
    weekSpecial: {
      fontSize: 16,
      fontWeight: 800,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 700,
    },
    parapraphText: {
      fontSize: 16,
      fontWeight: 400,
    },
    highlightText: {
      fontSize: 16,
      fontWeight: 500,
    },
  },
});

function ThemeCustom(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </>
  );
}

export default ThemeCustom;
