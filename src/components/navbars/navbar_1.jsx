import styles from "./navbar_1.module.css";

function Navbar1() {
  return (
    <header className={styles.navbar}>
      <h2 className={styles.title__navbar}>InspectX</h2>

      <ul className={styles.container__list}>
        <a>Home</a>
        <a>Explore</a>
        <a>About</a>
        <a>Contact</a>
        <button className={styles.button__register}>Sing Up</button>
      </ul>
    </header>
  );
}

export default Navbar1;
