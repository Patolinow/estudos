import User from "../../interfaces/User"
import UserItem from "../UserItem/UserItem"
import Card from "../../UI/Card/Card"
import styles from "./UserList.module.css"


interface UserListProps {
  users: User[]
}

const UserList = ({users}: UserListProps):JSX.Element => {
  return (
    <Card>
      <ul className={styles["items-list"]}>
        {users.map((user)=>
        <UserItem user={user}/>
        )
        }
      </ul>
    </Card>
  )
}

export default UserList