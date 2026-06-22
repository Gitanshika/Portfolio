const Hero = () => {
  return (
    <section id="home" style={styles.hero}>
      <p style={styles.tag}>Frontend Developer 👩‍💻</p>

      <h1 style={styles.title}>
        Hi, I'm <span style={styles.highlight}>Anshika</span>
      </h1>

      <p style={styles.subtitle}>
        I build clean, responsive & interactive web applications using React.
      </p>

      <p style={styles.small}>
        Turning ideas into real projects ⚡ | DSA Learner | Future Full-Stack Dev
      </p>

      <div style={styles.buttons}>
        <a href="#projects">
          <button style={styles.primary}>View Projects</button>
        </a>

        <a href="#contact">
          <button style={styles.secondary}>Contact Me</button>
        </a>
      </div>

      <div style={styles.glow}></div>
    </section>
  );
};

const styles = {
  hero: {
    textAlign: "center",
    padding: "130px 20px",
    position: "relative",
    overflow: "hidden",
  },

  tag: {
    color: "#94a3b8",
    fontSize: "14px",
    letterSpacing: "1px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "52px",
    fontWeight: "800",
    color: "#e5e7eb",
  },

  highlight: {
    color: "#60a5fa",
  },

  subtitle: {
    marginTop: "12px",
    fontSize: "18px",
    color: "#94a3b8",
  },

  small: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#64748b",
  },

  buttons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },

  primary: {
    padding: "10px 18px",
    background: "#1e293b",
    border: "1px solid rgba(96,165,250,0.3)",
    color: "#e5e7eb",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s",
  },

  secondary: {
    padding: "10px 18px",
    background: "transparent",
    border: "1px solid rgba(148,163,184,0.25)",
    color: "#e5e7eb",
    borderRadius: "10px",
    cursor: "pointer",
  },

  glow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "350px",
    height: "350px",
    background:
      "radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%)",
    transform: "translate(-50%, -50%)",
    zIndex: -1,
  },
};

export default Hero;