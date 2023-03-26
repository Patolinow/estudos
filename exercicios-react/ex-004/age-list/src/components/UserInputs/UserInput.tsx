import Card from "../../UI/Card/Card"
import Button from "../../UI/Button/Button"
import styles from "./UserInput.module.css"
import { useRef } from "react"

const UserInput = () => {

  const usernameRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    

  }

  return (
    <Card className={styles.form}>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input type="text" id="username"  ref={usernameRef}/>
        </div>
      
        <div>
          <label htmlFor="age">Age</label>
          <br />
          <input type="number" id="age" />
        </div>

        <Button>Add User</Button>
      </form>
    </Card>
  )
}

export default UserInput