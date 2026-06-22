function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me </h2>

      <div style={styles.card}>
        <p style={styles.text}>
          Let’s connect for projects, internships or collaboration 
        </p>

        <div style={styles.links}>
          <a
            href="mailto:anshichou.edu@gmail.com"
            style={styles.link}
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/anshika09choudhary"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Gitanshika"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
          >
            GitHub
          </a>
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
    maxWidth: "600px",
    margin: "0 auto",
    padding: "25px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(59, 130, 246, 0.15)",
    borderRadius: "16px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.35)",
  },

  text: {
    color: "#94a3b8",
    marginBottom: "20px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  link: {
    padding: "10px 14px",
    borderRadius: "10px",
    background: "#3b82f6",
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.2s",
  },
};

export default Contact;