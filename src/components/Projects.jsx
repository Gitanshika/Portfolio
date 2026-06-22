function Projects() {
  const projects = [
    {
      title: "Study Planner",
      desc: "Pomodoro, calendar & progress tracking with local storage.",
      tech: "React",
      link: "https://study-planner-ddz07k6iu-xmon.vercel.app/",
      github: "https://github.com/Gitanshika/Study-Planner",
    },
    {
      title: "Score Keeper",
      desc: "Simple and clean score tracking app.",
      tech: "React",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal developer portfolio built with React + Vite.",
      tech: "React + Vite",
      link: "#",
      github: "#",
    },
  ];

  return (
<section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects </h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 18px 50px rgba(59, 130, 246, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 12px 35px rgba(0, 0, 0, 0.35)";
            }}
          >
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.desc}>{p.desc}</p>

            <span style={styles.tech}>{p.tech}</span>

            <div style={styles.buttons}>
              <a href={p.link} target="_blank" rel="noreferrer">
                <button style={styles.btn}>Live Demo</button>
              </a>

              <a href={p.github} target="_blank" rel="noreferrer">
                <button style={styles.btnOutline}>GitHub</button>
              </a>
            </div>
          </div>
        ))}
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

  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
  },

  card: {
    width: "270px",
    padding: "22px",
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(59, 130, 246, 0.15)",
    borderRadius: "16px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.35)",
    transition: "0.25s ease",
    cursor: "pointer",
  },

  title: {
    color: "#60a5fa",
    fontSize: "20px",
    marginBottom: "10px",
  },

  desc: {
    color: "#94a3b8",
    fontSize: "14px",
    marginBottom: "10px",
  },

  tech: {
    display: "inline-block",
    marginBottom: "15px",
    fontSize: "12px",
    color: "#93c5fd",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  btn: {
    padding: "8px 12px",
    borderRadius: "10px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.2s",
  },

  btnOutline: {
    padding: "8px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    background: "transparent",
    color: "#e5e7eb",
    cursor: "pointer",
  },
};

export default Projects;