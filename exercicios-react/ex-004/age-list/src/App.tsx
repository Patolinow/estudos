import { useState } from "react";
import "./App.css";
import User from "./interfaces/User";
import UserList from "./components/UserList/UserList";
import UserInput from "./components/UserInputs/UserInput";

function App() {
  const dummyUsers: User[] = [
    { id: 1, username: "Max", age: 31 },
    { id: 2, username: "Diego", age: 19 },
    { id: 3, username: "Dominicoicoloko 'Donssssssss'", age: 1 },
  ];

  const [users, setUsers] = useState(dummyUsers);

  return (
    <div className="App">
      <UserInput />
      <UserList users={users} />
    </div>
  );
}

export default App;
