export default function ProjectsPage() {
  return (
    <section>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>My Projects</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project 1</h2>
          <p style={{ marginBottom: '0.5rem' }}>Description of Project 1</p>
          <p style={{ marginBottom: '0.5rem' }}>Technologies: [Tech Stack]</p>
          <a href="https://github.com/your-repo" style={{ color: '#0070f3', textDecoration: 'none' }}>Repository</a>
        </li>
        <li style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Project 2</h2>
          <p style={{ marginBottom: '0.5rem' }}>Description of Project 2</p>
          <p style={{ marginBottom: '0.5rem' }}>Technologies: [Tech Stack]</p>
          <a href="https://github.com/your-repo" style={{ color: '#0070f3', textDecoration: 'none' }}>Repository</a>
        </li>
      </ul>
    </section>
  );
}