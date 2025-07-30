import {useEffect, useState} from 'react'
import './Index.css'


function Expenseform(props){
const{itemToEdit}=props;
 const[title, setTitle]=useState("");
 const[amount,setAmount]=useState("");
 const[error,setError]=useState();

useEffect(()=>{
        if (itemToEdit){
            setTitle(itemToEdit.title)
            setAmount(itemToEdit.amount)
        }
},[itemToEdit])
       
const isEdit=props.itemToEdit

const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(amount)
        if(!title){
            setError('Title is needed');
            return;
        }
        if(!amount){
            setError('Amount is needed');
            return;
        }
        if(isEdit){
            //console.log("edit", itemToEdit.id, title, amount)
            props.editExpense(itemToEdit._id,title,amount);
        }else{
            props.addExpense(title,amount);
        }
        setError("");
        setTitle("");
        setAmount("");
}
const handleTitlechange=(e)=>{
    setTitle(e.target.value);
}
const handleAmountchange=(e)=>{
    setAmount(e.target.value);
}
// function handleSubmit(e){
//     e.preventDefault();
//     props.addExpense(title,amount);
//     setAmount("");
//     setTitle("");
// }

const clearForm=()=>{
        props.setItemToEdit(null);
        setTitle("");
        setAmount("");
    }

// return (
//     <>
//     <div className='expense-form'>
//     <h3>Add Expense</h3>
//      <form onSubmit={handleSubmit}>
//     <div className='form-group'>
//      <label className='form-label'>Title: </label>
//       <input 
//       type="text"
//       id="Title"
//       value={title}
//       onChange={handleTitlechange}
//       className='form-input'
//       />
//       </div>
  
//       <div className='form-group'>
//      <label className='form-label'>Amount: </label>
//       <input 
//       type="number"
//       id="amount"
//       value={amount}
//       onChange={handleAmountchange}
//       className='form-input'/>
//       </div>
//       <button type='submit'>Add expense</button>
//     </form>
//     </div>
//     </>
//   ) 
// }

return(
        <div className="Expense-Form">
            <h3> {isEdit?"EditExpense":"Add Income/Expense"}
            {isEdit?<button className="small-button"onClick={clearForm}>Clear</button>:null}</h3>
            <form onSubmit={handleSubmit}>
                {error && <div className="error" >{error}</div>}
                <div className="form-group">
                <label className='form-label'>Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={handleTitlechange}/>
                </div>
                <div className="form-group">
                    <label className='form-label'>Amount:</label>
                    <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountchange}/>
                </div>
                <button type="submit">{isEdit?"EditExpense":"Add Income/Expense"}</button>
            </form>
        </div>
    )   
}

export default Expenseform;