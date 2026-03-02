import styles from "./Teams.module.css";
import Card from "./Card";
// import Team from './Team.js'

const President = ({ data }) => {
  return (
    <div className={`${styles.president} ${styles.portfolio}`}>
      <h2>PRESIDENT</h2>
      <div className={styles.items}>
        {data.president?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default President;
