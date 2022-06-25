import Card from "../UI/Card";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
function AddUser(props) {
  const nameInput = useRef();
  const ageInput = useRef();

  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    const enterName = nameInput.current.value;
    const enterAge = ageInput.current.value;
    if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (Number(enterAge) < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    nameInput.current.value = "";
    ageInput.current.value = "";
    props.addUsers(enterName, enterAge);
  }

  function clearErrorState() {
    setError(null);
  }
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClearError={clearErrorState}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInput}></input>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInput}></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}
export default AddUser;
