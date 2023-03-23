import "./CourseGoalItem.css";

interface GoalProps {
  currentGoal: string;
  onClick: (e:any) => void;
}

export default function CourseGoalItem({
  currentGoal,
}: GoalProps): JSX.Element {
  return <li className="goal-item">{currentGoal}</li>;
}
