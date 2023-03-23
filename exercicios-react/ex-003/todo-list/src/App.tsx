import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import Goal from "./components/interfaces/Goal";
import "./App.css";

function App() {
  const dummyGoals: Goal[] = [
    { id: 1, currentGoal: "Do all exercises!" },
    { id: 2, currentGoal: "Finish the course!" },
  ];

  const [goalList, setGoalList] = useState(dummyGoals);
  const newInputHandler = (goal: string) => {
    setGoalList((prevGoals) => [...prevGoals, { id: Math.random(), currentGoal: goal }]);
  };

  return (
    <div className="App">
      <CourseInput onNewInput={newInputHandler} />
      <CourseGoalList goalList={goalList} />
    </div>
  );
}

export default App;
