"use client";

import Link from 'next/link';

export default function DownloadResumeButton() {
  return (
    <section style={{ textAlign: 'center', margin: '2rem 0' }}>
      <a
        href="/resume.pdf"
        download
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#1e293b',
          color: '#f8fafc',
          textDecoration: 'none',
          borderRadius: '0.5rem',
          fontWeight: '500',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#334155')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1e293b')}
      >
        Download Resume
      </a>
    </section>
  );
}