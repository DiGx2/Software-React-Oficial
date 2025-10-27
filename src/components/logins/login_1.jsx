import styles from "./login_1.module.css";
import { tabEnter } from "../../utils/tabEnter";

function Login1() {
  return (
    <div className={styles.container1}>
      <img src="/logo.svg" className={styles.logo} alt="Logo" />

      <div className={styles.tarjet__form}>
        <h1 className={styles.title}>Iniciar Sesión</h1>

        <form className={styles.formulario}>
          <input
            className={styles.user}
            type="text"
            placeholder="Usuario"
            onKeyDown={tabEnter}
          />
          <input
            className={styles.password}
            type="password"
            placeholder="Contraseña"
            onKeyDown={tabEnter}
          />
          <button className={styles.btnIniciarSesion} type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login1;
