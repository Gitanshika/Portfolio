function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Anshika.dev</h2>

    
        <ul style={styles.links}>
  <li><a href="#home">Home</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    cursor: "pointer",
  },
};

export default Navbar;