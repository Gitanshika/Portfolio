import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus size={40} /> },
  { name: "Java", icon: <FaJava size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
];

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills ⚡</h2>

      <div style={styles.grid}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 18px 50px rgba(59, 130, 246, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.35)";
            }}
          >
            <div style={styles.icon}>{skill.icon}</div>
            <p style={styles.text}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

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
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(59, 130, 246, 0.15)",
    borderRadius: "16px",
    padding: "20px",
    transition: "0.25s ease",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },

  icon: {
    color: "#60a5fa",
  },

  text: {
    marginTop: "10px",
    color: "#cbd5e1",
    fontWeight: "500",
  },
};

export default Skills;