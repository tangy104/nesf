import styles from "./Teams.module.css";
import Card from "./Card";
// import Team from './Team.js';

const Governor = ({ data }) => {
  return (
    <div className={` ${styles.governor} ${styles.portfolio}`}>
      <h2>GOVERNORS</h2>
      <div className={styles.items}>
        {data.governors?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default Governor;
