import IMeetup from "@/src/interfaces/IMeetup";
import { Method } from "axios";
import { MongoClient } from "mongodb";

interface IReq {
  method: Method;
  body: IMeetup;
}

export default async function handler(req: IReq, res: any) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGO_KEYS ?? "")
    const db = client.db()

    const meetupsCollection = db.collection("meetups")
    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({message: 'Meetup inserted!'})
  }
}
