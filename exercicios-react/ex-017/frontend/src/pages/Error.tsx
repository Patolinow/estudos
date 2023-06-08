import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"
import { isAxiosError } from "axios"


const ErrorPage = () => {
  const error = useRouteError() as Error
  const axiosError = isAxiosError(error) ? error : undefined
  const errorTitle = axiosError?.code || error.name
  const errorContent = axiosError?.message || error.message
  
  return <PageContent title={errorTitle}>
    <p>{errorContent}</p>
  </PageContent>
}

export default ErrorPage