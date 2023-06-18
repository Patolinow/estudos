import { useRouter } from "next/router"


export default function detailsPage() {
  const router = useRouter()
  const param = router.query.newsId
  return <h1>this is just {param}</h1>
}