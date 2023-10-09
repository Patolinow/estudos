import { useState } from "react";
import "./App.css";
import User from "./interfaces/User";
import UserList from "./components/UserList/UserList";
import UserInput from "./components/UserInputs/UserInput";

function App() {
  const [users, setUsers] = useState(Array<User>);

  const listChangeHandle = (newUser:User) => {
    setUsers((prevUsers) => [...prevUsers,newUser])
  }

  return (
    <div className="App">
      <UserInput onListChange={listChangeHandle} />
      <UserList users={users} />
    </div>
  );
}

export default App;
