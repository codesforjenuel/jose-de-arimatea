export default function Joseinfo() {
  return (
    <section className="about-container">
      {/* Single Section Header */}
      <div className="section-header">
        <span className="section-badge">NUESTRO PROPÓSITO</span>
        <h2 className="section-title">Objetivo de la Organización</h2>
      </div>

      {/* Flex Container Card */}
      <div className="objective-card">
        {/* Left Artwork */}
        <div className="artwork-wrapper">
          <img
            className="joseImg"
            src="https://res.cloudinary.com/dkaeetuud/image/upload/v1759993238/jose%20de%20arimatea/Jose-de-Arimatea-paint-1_fjxphx.jpg"
            alt="José de Arimatea y Jesús"
          />
        </div>

        {/* Right Content */}
        <div className="objective-content">
          <h3 className="content-subtitle">Apoyo Directo a Familias en Duelo</h3>

          <p className="description-text">
            La organización José de Arimatea tiene como objetivo principal brindar apoyo económico a familias de escasos recursos que enfrentan la difícil pérdida de un ser querido, garantizando que no tengan que atravesar solas la carga financiera de un servicio funerario.
          </p>

          <p className="description-text">
            Guiados por la compasión y el respeto, aseguramos que cada persona pueda despedir a sus seres queridos de manera digna y tranquila, aliviando la preocupación económica en los momentos de mayor necesidad.
          </p>

          {/* Pillars with Flex Wrap */}
          <div className="value-pillars">
            <div className="pillar-box">
              <h4>Ayuda Directa</h4>
              <span>Cobertura de gastos funerarios</span>
            </div>
            <div className="pillar-box highlight-border">
              <h4 className="gold-text">Servicio Digno</h4>
              <span>Respeto y tranquilidad familiar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}