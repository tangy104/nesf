import styles from './Teams.module.css';
import Team from './Team.js';
import Card from './Card.js';

const SeniorCoordinators = ({ data }) => {
  return (
    <div className={` ${styles.seniorcoordinators} ${styles.portfolio}`}>
      <h2>SENIOR COORDINATORS</h2>
      <div className={styles.items}>
        {data.SeniorCoordinator?.map((person, index) => (
                    <Card
                        key={index}
                        name={person.name}
                        image={person.image}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SeniorCoordinators;