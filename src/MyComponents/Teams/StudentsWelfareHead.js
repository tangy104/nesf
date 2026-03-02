import styles from "./Teams.module.css";
// import Team from "./Team.js";
import Card from "./Card";

const StudentsWelfareHead = ({ data }) => {
  return (
    <div className={` ${styles.heads} ${styles.portfolio}`}>
      <h2>STUDENTS' WELFARE HEAD</h2>
      <div className={styles.items}>
        {data.studentsWelfareHead?.map((person, index) => (
          <Card key={index} name={person.name} image={person.image} />
        ))}
      </div>
    </div>
  );
};

export default StudentsWelfareHead;
