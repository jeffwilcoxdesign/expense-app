import ExpenseItem from './ExpenseItem';

function Expenses(props){
    const {expenses} = props;

    const newExpenseItem = (id) => {
        
        return (<ExpenseItem 
                title={expenses[id].title} 
                amount={expenses[id].amount} 
                date={expenses[id].date}
                key={id}
            />);
    }

    return (
        <div>
            {expenses.map((element, id) => {
                return newExpenseItem(id);
            })}
        </div>
    )
}
export default Expenses;