import { useState } from "react";
import styles from "./sidebar_1.module.css";

function Sidebar1() {
  const [abierto, setAbierto] = useState(false);

  return (
    <aside
      className={`${styles.sidebar__left} ${abierto ? styles.abierta : ""}`}
    >
      <div className={styles.containerSidebarLeft}>
        <svg
          className={styles.boton__sidebarLeft}
          onClick={() => {
            setAbierto(true);
          }}
          id="botonAbrir__sidebarLeft"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="34"
          height="34"
        >
          <rect x="4" y="4" width="7" height="7" rx="1.5" fill="#2a70c9" />
          <rect x="12.5" y="4" width="7" height="7" rx="1.5" fill="#1e4d88" />
          <rect x="4" y="12.5" width="7" height="7" rx="1.5" fill="#1e4d88" />
          <rect
            x="12.5"
            y="12.5"
            width="7"
            height="7"
            rx="1.5"
            fill="#2a70c9"
          />
        </svg>

        <svg
          className={styles.botonCerrar__sidebarLeft}
          onClick={() => {
            setAbierto(false);
          }}
          id="botonMinimizar"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="icomoon-ignore"></g>
            <path
              d="M6.576 6.576c-5.205 5.205-5.205 13.643 0 18.849s13.643 5.205 18.849-0c5.206-5.206 5.206-13.643 0-18.849s-13.643-5.205-18.849 0zM24.67 24.67c-4.781 4.781-12.56 4.781-17.341 0s-4.781-12.56 0-17.341c4.781-4.781 12.56-4.781 17.341 0s4.78 12.56-0 17.341z"
              fill="#ffffff"
            ></path>
            <path
              d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z"
              fill="#ffffff"
            ></path>
          </g>
        </svg>

        <ul className={styles.container__list__left}>
          <li className={styles.barra__left__items}>
            <a className={styles.item1} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4c4d52"
                width="30"
                height="30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <pre className={styles.text__sidebar__left}> Panel Principal</pre>
            </a>
          </li>

          <li className={styles.barra__left__items}>
            <a className={styles.item2} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4c4d52"
                width="30"
                height="30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
              <pre className={styles.text__sidebar__left}>
                {" "}
                Revisiones Técnicas
              </pre>
            </a>
          </li>

          <li className={styles.barra__left__items}>
            <a className={styles.item3} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4c4d52"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                <path d="M7 14h.01" />
                <path d="M17 14h.01" />
                <rect width="18" height="8" x="3" y="10" rx="2" />
                <path d="M5 18v2" />
                <path d="M19 18v2" />
              </svg>
              <pre className={styles.text__sidebar__left}> Vehículos</pre>
            </a>
          </li>

          <li className={styles.barra__left__items}>
            <a className={styles.item4} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#4c4d52"
                width={30}
                height={30}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 
       4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07
       M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766
       l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0
       3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0
       2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <pre className={styles.text__sidebar__left}> Clientes</pre>
            </a>
          </li>

          <li className={styles.barra__left__items}>
            <a className={styles.item5} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4c4d52"
                width="30"
                height="30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25
        c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504
        1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9
        9v.375M10.125 2.25A3.375 3.375 0 0 1
        13.5 5.625v1.5c0 .621.504 1.125
        1.125 1.125h1.5a3.375 3.375 0 0 1
        3.375 3.375M9 15l2.25 2.25L15 12"
                />
              </svg>
              <pre className={styles.text__sidebar__left}> Certificados</pre>
            </a>
          </li>

          <li className={styles.barra__left__items}>
            <a className={styles.item6} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4c4d52"
                width="30"
                height="30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55
        0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257
        1.075.124l1.217-.456a1.125 1.125 0 0
        1 1.37.49l1.296 2.247a1.125 1.125 0 0
        1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723
        7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26
        1.43l-1.298 2.247a1.125 1.125 0 0
        1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47
        6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213
        1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52
        6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125
        1.125 0 0 1-1.369-.49l-1.297-2.247a1.125
        1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932
        6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125
        1.125 0 0 1-.26-1.43l1.297-2.247a1.125
        1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072
        1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <pre className={styles.text__sidebar__left}> Configuración</pre>
            </a>
          </li>

          <li className={styles.barra__left__items}>
            <a className={styles.item7} href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4c4d52"
                width="30"
                height="30"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1
        10.5 3h6a2.25 2.25 0 0 1
        2.25 2.25v13.5A2.25 2.25 0 0 1
        16.5 21h-6a2.25 2.25 0 0
        1-2.25-2.25V15m-3 0-3-3m0
        0 3-3m-3 3H15"
                />
              </svg>
              <pre className={styles.text__sidebar__left}> Cerrar Sesión</pre>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar1;
