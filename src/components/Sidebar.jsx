import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
    </div>
  );
}

export default Sidebar;
