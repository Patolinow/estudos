import { ActionFunctionArgs } from "react-router-dom";
import NewsletterSignup from "../components/NewsletterSignup";
import PageContent from "../components/PageContent";

const NewsLetterPage = () => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
};

export const newsLetterAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);

  return { message: "Signup successful!" };
};

export default NewsLetterPage;
