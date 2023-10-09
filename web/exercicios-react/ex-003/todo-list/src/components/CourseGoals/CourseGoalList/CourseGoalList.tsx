import "./CourseGoalList.css";
import Goal from "../../interfaces/Goal";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

interface GoalListProps {
  goalList: Goal[];
}

export default function CourseGoalList({
  goalList,
}: GoalListProps): JSX.Element {
  const itemClickHandler = (e:any) => {
    console.log(e)
  }


  return (
    <ul className="goal-list">
      {goalList.map((goal) => (
        <CourseGoalItem key={goal.id} currentGoal={goal.currentGoal} onClick={itemClickHandler} />
      ))}
    </ul>
  );
}
