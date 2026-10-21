export default function Hero({ slogan }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Bienvenue à Ma Garderie</h1>
        <p>{slogan}</p>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
          alt="Enfants à la garderie"
        />
      </div>
    </section>
  );
}
