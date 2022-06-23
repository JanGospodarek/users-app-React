import Card from "../UI/Card";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";
import { useState } from "react";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      Number(enteredAge) < 0
    )
      return;

    props.addUsers(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }
  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}
export default AddUser;
