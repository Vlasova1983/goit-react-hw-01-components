import PropTypes from "prop-types";
import styles from '../Statistics/Statistics.module.css';

export const Statistics = ({title,stats}) => {
    return (
        <section className={styles.statistics}>
            {title && <h2>{title}</h2>}
            <ul className={styles.stat_list}>
                {stats.map((stat)=>{
                    return (
                        <li className={styles.item} key={stat}
                        style={{            
                                backgroundColor: randomColor()            
                              }}
                        >
                            <span className={styles.label}>{stat.name}</span>
                            <span className={styles.percentage}>{stat.amount}</span>
                        </li>
                    )              
                })}                
            </ul>
        </section>
    );
};

const randomColor= () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({            
            name: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired
        })
    )
}


