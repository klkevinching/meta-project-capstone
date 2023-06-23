import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

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
      <Nav navData={navData} />
      <Main />
      <Footer navData={navData} />
    </>
  );
}

export default App;
