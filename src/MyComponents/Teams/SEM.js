import styles from "./Teams.module.css";
import Card from "./Card";
// import Team from "./Team.js";

const SEM = ({ data }) => {
  return (
    <div className={` ${styles.sem} ${styles.portfolio}`}>
      <h2>SENIOR EXECUTIVE MEMBERS</h2>
      <div className={styles.items}>
        {data.sem?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default SEM;
