import axios from "axios";
import _ from "lodash"

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    const data = res.data;
    console.log(data.name)
    console.log(data.address.city)
  })
  .catch((e) => {
    console.error(e);
  });
