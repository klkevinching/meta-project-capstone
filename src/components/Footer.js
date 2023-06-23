import './Footer.css'

function Footer(props) {
  const navData = props.navData

  const navElement = navData.map(data => {
    return <li key={data.name}>{data.name}</li>
  })

  return (
    <footer>
      <div>
        <img src="/images/logo_v.png" alt="Little Lemon Logo" />
      </div>
      <section>
        <ul>
          {navElement}
        </ul>
      </section>
      <section>
        <h1>
          Contact
        </h1>
        <div>
          <p>
            Address
          </p>
          <p>
            Phone Number
          </p>
          <p>
            Email
          </p>
        </div>
      </section>
      <section>
        <h1>
          Follow Us
        </h1>
        <div>
          <p>
            Facebook
          </p>
          <p>
            Instagram
          </p>
          <p>
            Twitter
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
