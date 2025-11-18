export default function TeamMember({ name, role, image }) {
    return(
        <div>
             <div className="team-card">
      <img src={image} alt={name} className="team-photo" />

      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
    </div>
        </div>
    )
}