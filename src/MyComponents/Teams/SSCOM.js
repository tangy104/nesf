import styles from "./Teams.module.css";
import Card from "./Card";
// import Team from './Team.js';

const SSCOM = ({ data }) => {
  return (
    <div className={`${styles.sscom} ${styles.portfolio}`}>
      <h2>SENIOR STEERING COMMITTEE MEMBERS</h2>
      <div className={styles.items}>
        {data.sscom?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default SSCOM;
