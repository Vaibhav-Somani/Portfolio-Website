import DownloadResumeButton from '../DownloadResumeButton';

export default function AboutPage() {
  return (
    <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>About Me</h1>
      <p>
        Welcome to my portfolio! I am a passionate developer with expertise in creating modern and responsive web applications.
      </p>
      <p>
        I specialize in front-end and back-end development, and I love building user-friendly and visually appealing interfaces.
      </p>
      <DownloadResumeButton />
    </section>
  );
}