import IMeetup from "@/src/interfaces/IMeetup";
import styles from "./MeetupDetails.module.css"

export default function MeetupDetails(props: IMeetup) {
  return (
    <section className={styles.detail}>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.address}</p>
    </section>
  );
}
