import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
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
  const [garderie, services] = await Promise.all([
    getData('/api/garderie'),
    getData('/api/services')
  ]);

  const nom = garderie?.nom || 'Ma Garderie';
  const slogan = garderie?.slogan || 'Un cocon pour grandir heureux';
  const servicesList = services || [];

  return (
    <main>
      <Navbar nom={nom} />
      <Hero slogan={slogan} />
      <Services services={servicesList} />
      <footer style={{ textAlign: 'center', padding: '2rem', background: '#ff9a76', color: 'white' }}>
        © 2025 {nom} — {garderie?.adresse || ''}
      </footer>
    </main>
  );
}
