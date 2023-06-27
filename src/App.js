import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import ThemeCustom from './theme/ThemeCustom'

function App() {
  const navData = [
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Menu'
    },
    {
      name: 'Reservations'
    },
    {
      name: 'Order Online'
    },
    {
      name: 'Login'
    }
  ]

  return (
    <>
      <ThemeCustom>
        <Nav navData={navData} />
        <Main />
        <Footer navData={navData} />
      </ThemeCustom>
    </>
  );
}

export default App;
