import { ActionFunctionArgs, json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export async function authAction({ params, request }: ActionFunctionArgs) {
  console.log("entered auth")

  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "signup";
  const url = "http://localhost:8080/" + mode;
  const data = await request.formData();
  const userData = { email: data.get("email"), password: data.get("password") };
  const supportedModes = ["login", "signup"]
  if (!supportedModes.includes(mode)) {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  console.log(mode)
  

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData)
  });

  const errorStatus = [422, 401]
  if (errorStatus.includes(response.status)) {
    throw json({message: "couldn't authenticate user"}, {status: 500})
  }

  console.log(`sending a ${mode} request`)
  const resData: {token: string} = await response.json()
  const token = resData.token

  localStorage.setItem('token', token)
  console.log(token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1)
  console.log(expiration.getTime())
  localStorage.setItem('expiration', expiration.toISOString())

  return redirect('/')
}

export default AuthenticationPage;
