import LoadingImage from "@/public/LoadingImage";
import styles from "./page.module.css"

export default function Loading() {
  return <div className={styles.loading}>
  <LoadingImage />
  </div>;
}
