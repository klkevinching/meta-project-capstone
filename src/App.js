import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import ThemeCustom from './theme/ThemeCustom'

function App() {
  const navData = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Menu',
      link: '/menu',
    },
    {
      name: 'Reservations',
      link: '/reservations',
    },
    {
      name: 'Order Online',
      link: '/orderonline',
    },
    {
      name: 'Login',
      link: '/login',
    },
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
