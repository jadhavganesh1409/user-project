import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredData, setEnteredData] = useState({ username: "", age: +"" });
  const [error, setError] = useState();
  // const onChange = (event) => {
  //   setEnteredData({ ...enteredData, [event.target.name]: event.target.value });
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // const { username, age } = enteredData;
    if (enteredName.trim().length === 0 || enteredAge.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty-values)",
      });
      return;
    }

    if (enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredData({ username: "", age: +"" });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            // value={enteredData.username}
            // onChange={(event) => onChange(event)}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            // value={enteredData.age}
            // onChange={(event) => onChange(event)}
            ref={ageInputRef}
          />
          <Button type="text">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
