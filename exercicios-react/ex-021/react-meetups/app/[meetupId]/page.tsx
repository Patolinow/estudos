import MeetupDetails from "@/src/components/meetups/MeetupDetails"

export default function MeetupDetailsPage() {
  const dummy = {
    id: "m1",
    title: 'A first meetup',
    address: "somewhere else",
    image: "https://plus.unsplash.com/premium_photo-1687148812314-dfc1c3bf1294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1059&q=80",
    description: "i don't know why but yes"
  }
  return <>
  <MeetupDetails id={dummy.id} address={dummy.address} image={dummy.image} title={dummy.title} description={dummy.description}/>
    
  </>
}