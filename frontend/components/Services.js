export default function Services({ services }) {
  return (
    <section className="services" id="services">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.id} className="service-card">
            <div className="icone">{s.icone}</div>
            <h3>{s.titre}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
