export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src="https://res.cloudinary.com/dkaeetuud/image/upload/v1759993239/jose%20de%20arimatea/jose_de_arimatea_logo_egvwsx.png"
        alt="José de Arimatea Logo"
      />

      <div className="headerContainer">
        <p>Cada acto de bondad es una semilla plantada para la eternidad.</p>

        <a
          href="https://buy.stripe.com/cNi3cve058sU4HS50iasg01"
          target="https://buy.stripe.com/cNi3cve058sU4HS50iasg01"
          className="donationButton"
        >
          <button>Donate/Donar</button>
          
        </a>
      </div>
    </div>
  );
}
