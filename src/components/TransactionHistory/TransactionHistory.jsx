import PropTypes from "prop-types";
import styles from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table  className={styles.transaction_history}>
            <thead>
                <tr>
                    <th>TYPE</th>
                    <th>AMOUNT</th>
                    <th>CURRENSY</th>
                </tr>
            </thead>
            <tbody> 
                {items.map((item)=>{
                    return (                       
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>                        
                    )              
                })}
            </tbody>
        </table>        
    );
};

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired
        })
    )
}
