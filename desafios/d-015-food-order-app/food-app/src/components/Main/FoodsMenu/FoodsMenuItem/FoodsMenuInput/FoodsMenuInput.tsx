import styles from "./FoodsMenuInput.module.css"
import Button from "../../../../UI/Button/Button"

const FoodsMenuInput = ():JSX.Element => {
return <form className={styles.form}>
  <div className={styles.input}>
    <label htmlFor="numInput">Amout</label>
     <input type="number" name="numInput" min={1} max={99} maxLength={2} id="numInput" defaultValue={1} />
  </div>
  <Button>+ Add</Button>
</form>
}

export default FoodsMenuInput