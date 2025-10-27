import styles from "./sidebar_2.module.css";

function Sidebar2() {
  return (
    <aside className={styles.sidebarRight}>
      <section className={styles.containerCertificar}>
        <h2 className={styles.titleCertificar}>CERTIFICAR PLACA:</h2>
        <ul className={styles.containerItemsCertificar}>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar1}`}>
            <a href="">XAS-ADS</a>
          </li>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar2}`}>
            <a href="">CDS-GHJ</a>
          </li>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar3}`}>
            <a href="">VBG-HJK</a>
          </li>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar4}`}>
            <a href="">BGE-GHY</a>
          </li>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar5}`}>
            <a href="">HKL-TYU</a>
          </li>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar6}`}>
            <a href="">MNG-WQE</a>
          </li>
          <li className={`${styles.itemCertificar} ${styles.itemCertificar7}`}>
            <a href="">ZAQ-POT</a>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar2;
