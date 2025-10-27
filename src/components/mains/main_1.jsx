import styles from "./main_1.module.css";

function Main1({ openModal }) {
  return (
    <main className={styles.container__main}>
      <section className={styles.containerGrafico}>
        <h3 className={styles.textEstadistica}>Estadística</h3>
        <div className={styles.grafico}></div>
      </section>

      {/* Contenedor de Nueva Apertura */}
      <section className={styles.containerApertura}>
        <h3 className={styles.textApertura}>Nueva Apertura</h3>
        <button className={styles.nuevaApertura} onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            width={50}
            height={50}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
        </button>

        <h3 className={styles.textImpresiones}>Impresiones</h3>
        <div className={styles.containerImpresiones}>
          <svg
            width={100}
            height={100}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 7H7V6h10v1zm0 12H7v-6h10v6zm2-12V3H5v4H1v8.996C1 17.103 1.897 18 3.004 18H5v3h14v-3h1.996A2.004 2.004 0 0 0 23 15.996V7h-4z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Contenedor de Actividad de Aperturas */}
      <section className={styles.containerActividad}>
        <h3 className={styles.textActividad}>Aperturas</h3>
        <ul className={styles.containerItemsAperturas}>
          <li className={styles.itemsApertura}>
            <span className={styles.placaRegistro}>ABC-123</span>
            <span className={styles.horaRegistro}>08:45 AM</span>
            <button id="btnInspeccion" className={styles.btnInspeccion}>
              INSPECCIÓN
            </button>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main1;
