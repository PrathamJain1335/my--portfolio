function Photograph() {
  return (
    <section id="photograph" style={{ textAlign: 'center', margin: '2rem 0 1rem 0' }}>
      <img
        src="/profile.jpg"
        alt="Profile"
        style={{
          width: '170px',
          height: '170px',
          objectFit: 'cover',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(33,111,224,0.22)',
          border: '5px solid #fff',
        }}
      />
      <h1 style={{ marginTop: '1rem', fontSize: '2rem', color: '#216fe0' }}>Pratham Jain</h1>
    </section>
  );
}

export default Photograph;
