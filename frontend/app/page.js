import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Activites from '../components/Activites';
import Contact from '../components/Contact';
import './globals.css';

async function getData(path) {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  try {
    const res = await fetch(`${base}${path}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('fetch failed');
    return await res.json();
  } catch {
    return null;
  }
}

export default async function Home() {
  const [garderie, services, activites] = await Promise.all([
    getData('/api/garderie'),
    getData('/api/services'),
    getData('/api/activites')
  ]);

  const nom = garderie?.nom || 'Ma Garderie';
  const slogan = garderie?.slogan || 'Un cocon pour grandir heureux';

  return (
    <main>
      <Navbar nom={nom} />
      <Hero slogan={slogan} />
      <Services services={services || []} />
      <Activites activites={activites || []} />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', background: '#ff9a76', color: 'white' }}>
        © 2025 {nom} — Narjess Dabbech
      </footer>
    </main>
  );
}
