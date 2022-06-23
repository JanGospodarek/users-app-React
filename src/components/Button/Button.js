import styles from "./Button.module.css";
function Button(props) {
  const { type, onClick, children } = props;

  return (
    <button type={type || "button"} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
export default Button;
