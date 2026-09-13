export default function Header() {
  return (
    <header className="hero-container">
      <div className="hero-content">
        
        {/* Left Column: Heading & Concise Mission */}
        <div className="hero-text">
          <span className="hero-subtitle">Fundación José de Arimatea</span>
          <h1 className="hero-title">
            Brindando dignidad y descanso eterno a quien más lo necesita.
          </h1>
          <p className="hero-description">
            Ofrecemos apoyo económico a familias de escasos recursos que no cuentan con los medios para cubrir los gastos de servicios funerarios dignos.
          </p>
        </div>

        {/* Right Column: Donation Card */}
        <div className="hero-card">
          <h3 className="card-title">Apoya Nuestra Causa</h3>
          <p className="card-subtitle">Selecciona tu tipo de aporte:</p>

          <div className="card-buttons">
            <a 
              href="https://buy.stripe.com/cNi3cve058sU4HS50iasg01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donation-btn"
            >
              Donar Única Vez (Personalizado)
            </a>

            <a 
              href="https://buy.stripe.com/3cIcN5f49cJa3DO78qasg03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donation-btn border-gold"
            >
              Oro Mensual (Plan de $20)
            </a>

            <a 
              href="https://buy.stripe.com/6oU14n3lr8sUgqA9gyasg02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donation-btn"
            >
              Plata Mensual (Plan de $50)
            </a>

            <a 
              href="https://buy.stripe.com/eVq14n6xDaB20rCcsKasg04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donation-btn border-gold"
            >
              Platino Mensual (Plan de $100)
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}