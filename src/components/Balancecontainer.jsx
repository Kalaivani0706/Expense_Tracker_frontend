import {usestate} from "react"
import './Index.css'
import Currentitem from "./Currentitem";

function Balancecontainer(props){
    const{expense}=props
    let expenses=0;
    let income=0;

    expense.forEach((Item)=>{
       let{amount}=Item;
       if(amount>0){
        income+= parseInt(amount);
       }
       else{
        expenses +=parseInt(amount);
       }
    })

    return(
        <>
        <div className="balance-container">
        <Currentitem  title="Income" amount={income} type="income"/>
        <Currentitem  title="Expense" amount={expenses} type="expense"/>
        <Currentitem  title="Balance" amount={income+expenses} type="Balance"/>
        </div>
        </>
    )
}

export default Balancecontainer;