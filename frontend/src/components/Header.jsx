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
          <button>Donar Una Vez</button>
          
        </a>
        <a
          href="https://buy.stripe.com/6oU14n3lr8sUgqA9gyasg02"
          target="https://buy.stripe.com/6oU14n3lr8sUgqA9gyasg02"
          className="donationButton"
        >
          <button>Plateado Mensual</button>
          
        </a>
        <a
          href="https://buy.stripe.com/3cIcN5f49cJa3DO78qasg03"
          target="https://buy.stripe.com/3cIcN5f49cJa3DO78qasg03"
          className="donationButton"
        >
          <button>Oro Mensual</button>
          
        </a>
        <a
          href="https://buy.stripe.com/eVq14n6xDaB20rCcsKasg04"
          target="https://buy.stripe.com/eVq14n6xDaB20rCcsKasg04"
          className="donationButton"
        >
          <button>Platino Mensual</button>
          
        </a>
      </div>
    </div>
  );
}
