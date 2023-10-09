import styles from "./Error.module.css"

const ErrorPage = () => {
  return <>
  <main className={styles.error}>
    <h1>Error 404</h1>
    <p>page not found</p>
  </main>
  </>
}

export default ErrorPage