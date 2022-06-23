import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "../Button/Button";
function ErrorModal(props) {
  const { title, message, onClearError } = props;
  const { backdrop, modal, header, content, actions } = styles;
  return (
    <div>
      <div className={backdrop} onClick={onClearError}></div>
      <Card className={modal}>
        <header className={header}>
          <h2>{title}</h2>
        </header>
        <div className={content}>
          <p>{message}</p>
        </div>
        <footer className={actions}>
          <Button onClick={onClearError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
export default ErrorModal;
