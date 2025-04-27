export default function ContactPage() {
  return (
    <section>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Contact Me</h1>
      <form style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px' }} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px' }} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required style={{ padding: '0.5rem', border: '1px solid #ddd', borderRadius: '5px', minHeight: '100px' }}></textarea>

        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
      </form>
      <ul style={{ textAlign: 'center', marginTop: '2rem', listStyle: 'none', padding: 0 }}>
        <li><a href="https://linkedin.com/in/your-profile" style={{ color: '#0070f3', textDecoration: 'none' }}>LinkedIn</a></li>
        <li><a href="https://github.com/your-profile" style={{ color: '#0070f3', textDecoration: 'none' }}>GitHub</a></li>
      </ul>
    </section>
  );
}