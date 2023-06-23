import axios from "axios";

export async function useGetMeetups(params = "") {
  const url = `https://max-http-requests-default-rtdb.firebaseio.com/meetups${params ? "/" + params : ""}.json`
  console.log(url)
  const meetupsData = await axios.get(url);

  return meetupsData.data;
}
