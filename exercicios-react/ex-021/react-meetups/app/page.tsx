import MeetupList from "@/src/components/meetups/MeetupList";
import IMeetup from "@/src/interfaces/IMeetup";
import axios from "axios";

export default async function HomePage() {
  const meetups: IMeetup[] = await getMeetups();
  console.log(meetups)

  return <MeetupList meetups={meetups} />;
}

async function getMeetups() {
  const meetupsData = await axios.get(
    "https://max-http-requests-default-rtdb.firebaseio.com/meetups.json");

  return meetupsData.data;
}
