import styles from "./navar_2.module.css";

export default function Navar2() {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" className={styles.logo} alt="Logo" />
      <p className={styles.textLogo}>InspectX</p>

      <div className={styles.containerIcons}>
        <div className={styles.containerSearch}>
          <input
            className={styles.search}
            type="text"
            placeholder="Buscar placa..."
          />

          {/* Icono de lupa */}
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        {/* Icono de notificaciones */}
        <svg
          className={styles.iconNotification}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="38"
          height="38"
          fill="#ffffff"
        >
          <path d="M18 8a6 6 0 10-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>

        {/* Icono de cuenta */}
        <svg
          className={styles.iconAccount}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="38"
          height="38"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="11" fill="#ffffff" stroke="none" />
          <circle cx="12" cy="9" r="3.5" />
          <path d="M6.5 18a6 6 0 0111 0" />
        </svg>
      </div>
    </header>
  );
}
