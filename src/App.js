import React, {useState} from 'react';
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
    <div>
      <AddUser onSave={UserDataHandler} />
      <UserList users={userData} />
    </div>
  );
}
export default App;