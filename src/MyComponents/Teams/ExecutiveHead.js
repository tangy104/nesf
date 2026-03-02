import styles from "./Teams.module.css";
// import Team from './Team.js';
import Card from "./Card";

const ExecutiveHead = ({ data }) => {
  return (
    <div className={` ${styles.heads} ${styles.portfolio}`}>
      <h2>EXECUTIVE HEADS</h2>
      <div className={styles.items}>
        {data.executiveHead?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default ExecutiveHead;
