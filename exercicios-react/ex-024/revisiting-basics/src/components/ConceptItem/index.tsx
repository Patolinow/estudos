import { IConcept } from "../../types/IConcept"
import styles from "./ConceptItem.module.scss"

interface IConceptItemProps {
  concept: IConcept
}

const ConceptItem = ({concept}:IConceptItemProps) => {
  return (
        <li className={styles.concept}>
          <img src={concept.image} alt={concept.title} />
          <h2>{concept.title}</h2>
          <p>{concept.description}</p>
        </li>
  )
}

export default ConceptItem