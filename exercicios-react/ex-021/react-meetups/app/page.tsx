import MeetupList from "@/src/components/meetups/MeetupList";
import IMeetup from "@/src/interfaces/IMeetup";
import { MongoClient } from "mongodb";

// export const revalidadte = 60

export default async function HomePage() {
  const client = await MongoClient.connect(
    "mongodb+srv://fabio:easypass@cluster0.uecpty7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsCollectionExtracted = await meetupsCollection.find().toArray();
  const tempMeetups: unknown = meetupsCollectionExtracted.map((meetup) => {
    return { id: meetup._id.toString(), ...meetup };
  })
  const meetups = tempMeetups as IMeetup[]
  client.close();

  return <MeetupList meetups={meetups} />;
}
