import User from "../../interfaces/User";
import styles from "./UserItem.module.css"

interface UserItemProps {
  user: User;
}

const UserItem = ({user}:UserItemProps): JSX.Element => {
  return <li className={styles.item} key={user.id}>{`${user.username} (${user.age} ${ user.age <= 1 ? "year" : "years"} old)`}</li>;
};

export default UserItem;
