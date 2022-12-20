import PropTypes from "prop-types";
import './Statistics';

export const Statistics = ({title,stats}) => {
    return (
        <section class="statistics">
            {title && <h2>{title}</h2>}
            <ul class="stat-list">
                {stats.map((stat)=>{
                    return (
                        <li class="item" key={stat}
                        style={{            
                                backgroundColor: randomColor()            
                              }}
                        >
                            <span class="label">{stat.name}</span>
                            <span class="percentage">{stat.amount}</span>
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


