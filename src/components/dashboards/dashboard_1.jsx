import { useState } from "react";
import styles from "./dashboard_1.module.css";
import Navar2 from "../navbars/navbar_2.jsx";
import Sidebar1 from "../sidebars/sidebar_1.jsx";
import Main1 from "../mains/main_1.jsx";
import Sidebar2 from "../sidebars/sidebar_2.jsx";
import Modal1 from "../modals/modal_1.jsx";

function Dashboard1() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <Navar2 />
      </header>
      <aside className={styles.sidebar}>
        <Sidebar1 />
      </aside>
      <main className={styles.main}>
        <Main1 openModal={openModal} />
      </main>
      <aside className={styles.sidebar2}>
        <Sidebar2 />
      </aside>
      <Modal1 modalAbierto={open} closeModal={closeModal} />
    </div>
  );
}

export default Dashboard1;
