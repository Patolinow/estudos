import { Ref, useRef, useState } from "react";
import Button from "../../UI/Buttom/Buttom";
import styles from "./CourseInput.module.css"

interface CourseInputProps {
  onNewInput(goalRef: string): void;
}

interface InvalidProps {
  readonly isValid?: boolean;
}

export default function CourseInput({
  onNewInput,
}: CourseInputProps): JSX.Element {
  const goalRef = useRef<HTMLInputElement>(null);
  const [isValid, setValid] = useState(true);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const goal = goalRef.current!.value;
    if (goal == "") {
      setValid(false);
      return;
    }
    setValid(true);
    onNewInput(goal);
    goalRef.current!.value = "";
  };

  return (
    <form action="" className={styles['goal-form']} onSubmit={submitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label htmlFor="to-add">Course Goal</label>
        <input type="text" name="to-add" id="to-add" ref={goalRef} />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
}
