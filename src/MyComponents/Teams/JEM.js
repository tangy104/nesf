import styles from "./Teams.module.css";
import Card from "./Card";
// import Team from './Team.js'

const JEM = ({ data }) => {
  return (
    <div className={` ${styles.jem} ${styles.portfolio}`}>
      <h2>JUNIOR EXECUTIVE MEMBERS</h2>
      <div className={styles.items}>
        {data.jem?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default JEM;
