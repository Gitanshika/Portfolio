function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me </h2>

      <div style={styles.card}>
        <p style={styles.text}>
          Hi, I'm <span style={styles.highlight}>Anshika</span>. I'm a frontend
          developer who loves building clean, responsive and interactive web
          applications using React.
        </p>

        <p style={styles.text}>
          I enjoy turning ideas into real projects, learning system design
          basics, and improving my DSA skills step by step.
        </p>

        <p style={styles.text}>
          Currently focused on becoming a strong full-stack developer and
          building production-ready projects 
        </p>

        <div style={styles.skills}>
          {["React", "JavaScript", "Node.js", "HTML", "CSS", "C++"].map(
            (skill) => (
              <span key={skill} style={styles.skillTag}>
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#3b82f6",
    marginBottom: "40px",
  },

  card: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "25px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(59, 130, 246, 0.15)",
    borderRadius: "16px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.35)",
    textAlign: "left",
  },

  text: {
    color: "#94a3b8",
    fontSize: "15px",
    lineHeight: "1.7",
    marginBottom: "12px",
  },

  highlight: {
    color: "#60a5fa",
    fontWeight: "600",
  },

  skills: {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  skillTag: {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    background: "rgba(59, 130, 246, 0.15)",
    color: "#93c5fd",
    border: "1px solid rgba(59, 130, 246, 0.2)",
  },
};

export default About;