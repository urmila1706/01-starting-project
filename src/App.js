import React, {useState,Fragment} from 'react';
import AddUser from "./Components/Users/AddUsers";
//import "./App.css";
import UserList from "./Components/Users/UsersList";

function App() {
  const [userData, setUserData] = useState([]);
  const UserDataHandler = (data) => {
    setUserData((prevUserData) => {
      return [...prevUserData, data];
    });
  };
  console.log(userData);
  return (
    <Fragment>
      <AddUser onSave={UserDataHandler} />
      <UserList users={userData} />
    </Fragment>
  );
}
export default App;