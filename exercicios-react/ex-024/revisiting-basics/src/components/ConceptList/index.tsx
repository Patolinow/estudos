import ConceptItem from "../ConceptItem";
import { IConcept } from "../../types/IConcept";
import styles from "./ConceptList.module.scss"

interface IConceptListProps {
  conceptList: IConcept[];
}

const ConceptList = ({ conceptList }: IConceptListProps) => {
  return (
    <ul className={styles.concepts}>
      {conceptList.map((concept) => (
        <ConceptItem key={concept.title} concept={concept} />
      ))}
    </ul>
  );
};

export default ConceptList;
