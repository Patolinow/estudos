import { Ref, useRef } from "react";
import Button from "../../UI/Buttom/Buttom";
import "./CourseInput.css";

interface CourseInputProps {
  onNewInput(goalRef: string): void;
}

export default function CourseInput({
  onNewInput,
}: CourseInputProps): JSX.Element {
  const goalRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const goal = goalRef.current!.value;
    onNewInput(goal);
    goalRef.current!.value = "";
  };

  return (
    <form action="" className="goal-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="to-add">Course Goal</label>
        <input type="text" name="to-add" id="to-add" ref={goalRef} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
}
