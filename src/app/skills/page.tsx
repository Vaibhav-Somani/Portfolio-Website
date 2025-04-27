export default function SkillsPage() {
  return (
    <section>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>My Skills</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>JavaScript:</strong>
          <div style={{ background: '#ddd', borderRadius: '5px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: '90%', background: '#0070f3', height: '10px' }}></div>
          </div>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>React:</strong>
          <div style={{ background: '#ddd', borderRadius: '5px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: '85%', background: '#0070f3', height: '10px' }}></div>
          </div>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Node.js:</strong>
          <div style={{ background: '#ddd', borderRadius: '5px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: '70%', background: '#0070f3', height: '10px' }}></div>
          </div>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <strong>CSS:</strong>
          <div style={{ background: '#ddd', borderRadius: '5px', overflow: 'hidden', marginTop: '0.5rem' }}>
            <div style={{ width: '95%', background: '#0070f3', height: '10px' }}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}