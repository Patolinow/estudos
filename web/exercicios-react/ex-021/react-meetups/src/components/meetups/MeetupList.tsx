import IMeetup from '@/src/interfaces/IMeetup';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import axios from "axios"

interface IMeetupListProps {
  meetups: IMeetup[]
}

function MeetupList(props: IMeetupListProps) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
