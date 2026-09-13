import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-accent"></div>

      <div className="footer-content">
        {/* Column 1: Brand & Mission */}
        <div className="footer-brand">
          <h3 className="footer-title">Fundación José de Arimatea</h3>
          <p className="footer-mission">
            Ofrecemos apoyo económico a familias de escasos recursos para cubrir gastos de servicios funerarios.
          </p>
          <div className="ein-badge">EIN # 36-5146957</div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about-us">Quiénes Somos</Link></li>
            <li><Link to="/mission">Misión</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <ul>
            <li><a href="mailto:info@josedearimatea.com">info@josedearimatea.com</a></li>
            <li>949-690-4199</li>
            <li>1651 E Edinger Avenue, Santa Ana CA, 92705</li>
          </ul>
        </div>

        {/* Column 4: Socials & CTA */}
        <div className="footer-action">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a 
              href="https://www.facebook.com/profile.php?id=61581171410451" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img 
                src="https://res.cloudinary.com/dkaeetuud/image/upload/v1760415152/jose%20de%20arimatea/facebook-new_rqkuj6.png" 
                alt="Facebook" 
                className="socialIcon" 
              />
            </a>
            <a 
              href="https://www.instagram.com/josedearimateaorg/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img 
                src="https://res.cloudinary.com/dkaeetuud/image/upload/v1760415152/jose%20de%20arimatea/CIS-A2K_Instagram_Icon__Black.svg_brewnp.png" 
                alt="Instagram" 
                className="socialIcon" 
              />
            </a>
            <a 
              href="https://www.tiktok.com/@josedearimateacorp" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img 
                src="https://res.cloudinary.com/dkaeetuud/image/upload/v1760415152/jose%20de%20arimatea/3116491_cfnz9e.png" 
                alt="TikTok" 
                className="socialIcon" 
              />
            </a>
          </div>
          <a
            href="https://buy.stripe.com/cNi3cve058sU4HS50iasg01"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-donate-btn"
          >
            Donar Ahora
          </a>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Fundación José de Arimatea. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <Link to="/privacy">Política de Privacidad</Link>
          <span className="separator">|</span>
          <Link to="/terms">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
}