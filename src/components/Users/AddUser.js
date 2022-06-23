import Card from "../UI/Card";
import Button from "../Button/Button";
import styles from "./AddUser.module.css";
function AddUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}
export default AddUser;
