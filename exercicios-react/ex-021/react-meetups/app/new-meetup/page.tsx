"use client"
import NewMeetupForm from "@/src/components/meetups/NewMeetupForm";

export default function NewMeetupPage(){
  function addMeetupHandler() {

  }

  return (<>
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </>
  )
}