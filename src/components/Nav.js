import './Nav.css'

function Nav(props) {
  const navData = props.navData

  const navElement = navData.map(data => {
    return <li key={data.name}>{data.name}</li>
  })

  return (
    <nav>
      <div className="logo">
        <img src="/images/logo_h.png" alt="Little Lemon Logo" />
      </div>
      <ul>
        {navElement}
      </ul>
    </nav>
  );
}

export default Nav;
