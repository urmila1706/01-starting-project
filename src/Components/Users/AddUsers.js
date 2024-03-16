import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [enetredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enetredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please eneter a valid name and age (non-Empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please eneter a valid  age (>0)",
      });
      return;
    }
    const userData = {
      name: enetredUserName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onSave(userData);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
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
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={enetredUserName}
              onChange={userNameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
            <Button type="submit">Add User </Button>
          </form>
        </Card>
      </Wrapper>
    );
  };
  export default AddUser;