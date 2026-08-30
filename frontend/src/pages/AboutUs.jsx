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
          phrase="“Ser parte de José de Arimatea es para mí una misión de corazón. Queremos acompañar a las familias en sus momentos más difíciles, brindándoles apoyo, dignidad y esperanza. Creo que una mano extendida puede aliviar el dolor y recordarnos que, unidos, podemos hacer una gran diferencia.”"
        />
        <TeamMember
          image="https://res.cloudinary.com/dkaeetuud/image/upload/v1788057763/jose%20de%20arimatea/IMG_7851_g4dmjf.jpg"
          name="Jessica Toscano"
          role="Vicepresidenta"
          phrase="“Decidí formar parte de José de Arimatea porque creo que nadie debería enfrentar solo un momento tan difícil como la pérdida de un ser querido. Me motiva poder apoyar a las familias que no cuentan con los recursos necesarios para cubrir un servicio funerario y brindarles un poco de tranquilidad en medio de su dolor. Para mí es un honor ser parte de esta organización y aportar mi tiempo, mi esfuerzo y mi corazón para ayudar a quienes más lo necesitan.”"
        />
        <TeamMember
          image="https://res.cloudinary.com/dkaeetuud/image/upload/v1788057762/jose%20de%20arimatea/image_2c6480e1_d0jgbm.png"
          name="Marisela Contreras"
          role="Tesorera"
          phrase="“Quise ser parte de José de Arimatea porque para mí es muy importante poder ayudar a las personas cuando atraviesan momentos difíciles. Muchas familias pasan por la pérdida de un ser querido y, además del dolor, enfrentan preocupaciones económicas. Me inspira saber que con nuestro trabajo podemos aportar un poco de alivio y apoyo. Como tesorera, quiero contribuir con responsabilidad y compromiso para que cada recurso sea utilizado de la mejor manera y llegue a quienes realmente lo necesitan.”"
        />
        <TeamMember
          image="https://res.cloudinary.com/dkaeetuud/image/upload/v1788057762/jose%20de%20arimatea/IMG_7849_wmonm1.jpg"
          name="Claudia Espinoza"
          role="Secretaria"
          phrase="“He decidido ser parte de esta organización porque me preocupa ver que muchas familias no cuentan con los recursos necesarios para despedir dignamente a un ser querido. Para mí, poder ayudar en esos momentos tan difíciles es una forma de brindar apoyo, esperanza y solidaridad a quienes más lo necesitan. Me llena de satisfacción formar parte de una organización que trabaja con el corazón para ayudar a los demás.”"
        />
      </div>
    </div>
  );
}
