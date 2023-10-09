"use client"
import NewMeetupForm from "@/src/components/meetups/NewMeetupForm";
import IMeetup from "@/src/interfaces/IMeetup";
import axios from "axios";
import { Metadata } from "next";
import { useRouter } from "next/navigation";

export default function NewMeetupPage(){
  const router = useRouter()

  async function addMeetupHandler(newMeetupData: IMeetup) {
    const res = await axios.post('/api/new-meetup', newMeetupData)
    console.log(res.data)
    router.push('/')
  }

  return (<>
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </>
  )
}