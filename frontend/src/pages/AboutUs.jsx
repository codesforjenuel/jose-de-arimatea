import TeamMember from "../components/TeamMember";

export default function AboutUs() {
  return (
    <div>
      <div className="aboutUsContainerOne">
        <h3>PORQUE EL QUERER AYUDAR?</h3>
        <div className="aboutTextContainer">
          <p>
            PORQUE CADA DIA ES MAS DIFICIL PODER HACER EL GASTO DE UN FUNERAL Y
            MAS CUANDO NO LO ESPERAS O CUANDO NO CUENTAS CON LOS RECURSOS PARA
            PAGAR.
          </p>
          <p>
            -NO SABER CUANDO SUCEDE. <br />
            -NO CONTAR CON UN PLAN.
            <br />
            -GENTE QUE ES DE BAJOS RECURSOS.
            <br />
            -CUANDO LA PERSONA NO TIENE FAMILIA.
            <br />
            -EN UNA CATRASTOFE O MUERTE INESPERADA.
          </p>
        </div>
      </div>
      <div className="messagesContainer">
        <div className="textMessage">
          <p>
            "UNA FE SIN OBRAS ES UNA FE MUERTA" "FAITH WITHOUT WORKS IS DEAD"
          </p>
          <p>
            {" "}
            "EL QUE NO VIVE PARA SERVIR NO SIRVE PARA VIVIR" 
          </p>
          <p>
            "HACER UNA DONACION ES LA MAXIMA SENAL DE SOLIDARIDAD. LAS ACCIONES
            HABLAN MAS FUERTE QUE LAS PALABRAS" -IBRAHIM HOOPER.
          </p>
        </div>
      </div>
      <div className="teamContainer">
        <TeamMember
          image="https://res.cloudinary.com/dkaeetuud/image/upload/v1763420607/jose%20de%20arimatea/IMG_4119_r8le5i.webp"
          name="Fernando Perea"
          role="Director"
        />
        <TeamMember
          image="https://res.cloudinary.com/dkaeetuud/image/upload/v1763420606/jose%20de%20arimatea/IMG_4122_c0uco4.webp"
          name="Nancy J Rodriguez"
          role="Vicepresidenta"
        />
      </div>
    </div>
  );
}
