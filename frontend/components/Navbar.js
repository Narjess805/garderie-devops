export default function Navbar({ nom }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>🧸</span>
        <span>{nom}</span>
      </div>
      <ul>
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#activites">Activités</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
