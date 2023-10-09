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
        { users.length ? users.map((user)=> <UserItem user={user}/>) : <h2>There are no users yet</h2>}

      </ul>
    </Card>
  )
}

export default UserList