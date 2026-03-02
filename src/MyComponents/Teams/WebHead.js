import styles from './Teams.module.css';
// import Team from './Team.js';
import Card from './Card';

const WebHead = ({data}) => {
    return ( 
        <div className={` ${styles.heads} ${styles.portfolio}`}>
            <h2>WEB HEADS</h2>
            <div className={styles.items}>
                {data.webHead?.map((person, index) => (
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
 
export default WebHead;