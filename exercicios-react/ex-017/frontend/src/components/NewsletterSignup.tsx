import { FetcherWithComponents, useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher:FetcherWithComponents<{message: string}> = useFetcher();
  const {state, data} = fetcher

  useEffect(() => {
    if (state === "idle" && data?.message) {
      window.alert(data.message)
    }
  })

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
