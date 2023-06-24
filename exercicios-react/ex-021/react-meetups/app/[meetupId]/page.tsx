import MeetupDetails from "@/src/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import { Metadata, ResolvingMetadata } from "next";

interface IParam {
  meetupId: string;
}

interface IGeneratedMetadataProps {
  params: { meetupId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const revalidate = 0

export async function generateMetadata({params}:IGeneratedMetadataProps){
  
  const client = await MongoClient.connect(
    "mongodb+srv://fabio:easypass@cluster0.uecpty7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetup = await meetupsCollection.findOne({_id: new ObjectId(params.meetupId)})
  client.close()
  
  const metadata:Metadata = {title: meetup?.title, description: meetup?.description}
  return  metadata
}

export default async function MeetupDetailsPage({params}:{params: IParam}) {
  // const meetupIdTransformed = (Number(params.meetupId.split("").slice(1, 2).join("")) - 1).toString()
  // const meetup: IMeetup = await useGetMeetups("0");
  // console.log(params)
  
  const client = await MongoClient.connect(
    "mongodb+srv://fabio:easypass@cluster0.uecpty7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsCollectionExtracted = await meetupsCollection.findOne({_id: new ObjectId(params.meetupId)})
  client.close()

  return (
    <>
      <MeetupDetails
        id={params.meetupId}
        address={meetupsCollectionExtracted?.address}
        image={meetupsCollectionExtracted?.image}
        title={meetupsCollectionExtracted?.title}
        description={meetupsCollectionExtracted?.description}
      />
    </>
  );
}

export async function generateStaticParams() {
  const client = await MongoClient.connect(
    "mongodb+srv://fabio:easypass@cluster0.uecpty7.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsCollectionExtracted = await meetupsCollection.find({}).project({_id: 1}).toArray()

  // const meetups: IMeetup[] = await useGetMeetups();
  const params: IParam[] = meetupsCollectionExtracted.map((meetup) => {
    return { meetupId: meetup._id.toString() };
  });

  client.close()
  return params;
}