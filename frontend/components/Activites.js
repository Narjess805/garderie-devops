export default function Activites({ activites }) {
  return (
    <section className="services" id="activites">
      <h2>Nos Activités</h2>
      <div className="services-grid">
        {activites.map((a) => (
          <div key={a.id} className="service-card">
            <div className="icone">📅</div>
            <h3>{a.jour}</h3>
            <p><strong>{a.nom}</strong></p>
            <p>à {a.heure}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
