import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio Website',
  description: 'Showcase of my skills, projects, and experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#ffffff', color: '#333', fontFamily: 'Inter, sans-serif', margin: 0 }}>
        <header style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>My Portfolio</h1>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, gap: '1.5rem' }}>
              <li><Link href="/" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>About</Link></li>
              <li><Link href="/projects" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Projects</Link></li>
              <li><Link href="/skills" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Skills</Link></li>
              <li><Link href="/contact" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Contact</Link></li>
              <li><Link href="/blog" style={{ color: '#f8fafc', textDecoration: 'none', fontWeight: '500' }}>Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', lineHeight: '1.6' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: '#1e293b', color: '#f8fafc', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
