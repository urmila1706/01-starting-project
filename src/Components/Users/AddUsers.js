import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
const nameInputRef=useRef();
const ageInputRef=useRef();
 const collegenameInputRef=useRef() ;
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredUserAge=ageInputRef.current.value;
    const enteredCollegeName=collegenameInputRef.current.value;
    if (enteredName.trim().length === 0 || 
    enteredUserAge.trim().length === 0 ||
    enteredCollegeName.trim().length===0)
     {
      setError({
        title: "Invalid Input",
        message: "Please eneter a valid name and age (non-Empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please eneter a valid  age (>0)",
      });
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredUserAge,
      collegename:enteredCollegeName,
      id: Math.random().toString(),
    };
    props.onSave(userData);
    nameInputRef.current.value= '';
    ageInputRef.current.value= '';
    collegenameInputRef.current.value='';
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
              
              ref={nameInputRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              id="age"

               ref={ageInputRef}
            />
            <label htmlFor="collegename">College Name</label>
            <input
              type="text"
              id="collegename"
              
              ref={collegenameInputRef}
            />

            <Button type="submit">Add User </Button>
          </form>
        </Card>
      </Wrapper>
    );
  };
  export default AddUser;