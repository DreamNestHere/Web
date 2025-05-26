import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f0f0f0',
      padding: '2rem 1rem',
      color: '#555',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>DreamNest</p>

       {/* <p style={{ margin: '0.3rem 0' }}>負責人：張芷瑄</p> */}
        <p style={{ margin: '0.3rem 0' }}>電話：0953-771-567</p>
        <p style={{ margin: '0.3rem 0' }}>LINE 官方帳號：@886wfqay</p>

        <div style={{ margin: '1rem 0' }}>
          <a
            href="https://www.facebook.com/profile.php?id=61576038931802"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 0.5rem', color: '#555', textDecoration: 'none' }}
          >
            Facebook
          </a>
          |
          <a
            href="https://www.instagram.com/dream_nest_here/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 0.5rem', color: '#555', textDecoration: 'none' }}
          >
            Instagram
          </a>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>&copy; 2025 DreamNest. All rights reserved.</p>
      </div>
    </footer>
  );
}
