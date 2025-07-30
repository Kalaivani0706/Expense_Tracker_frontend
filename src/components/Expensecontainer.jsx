import react,{useEffect, useState} from 'react'
import Expenseform from './Expenseform';
import {v4 as uid}from "uuid";
import History from './History';
import Expenseitem from './Expenseitem';
import './Index.css'
import Balancecontainer from './Balancecontainer';
import Currentitem from './Currentitem';

function Expensecontainer(){
    const [expense,setExpense]=useState([]);
    // const[loading,setLoading]=useState(true);
    const[itemToEdit,setItemToEdit]=useState(null)


   //fetch
   const fetchExpenses=async()=>{
   // setLoading(true);
    try{
        const response=await fetch('http://localhost:3000/expenses');
        const data=await response.json();
        setExpense(data);
    }
    catch(error){
        console.error('failed to fetch',error);
    }
    //setLoading(false);
   }
   console.log(expense);

   useEffect(()=>{
      fetchExpenses()
   },[]);



//     const EXPENSE = [{
//         id:uid(),
//         tittle:"Expense1",
//         amount:100
//     },{
//         id:uid(),
//         tittle:"Expense2",
//         amount:500
//     }]

// const[expense,setExpense]=useState(EXPENSE)

//     function addExpense(tittle,amount){
//         setExpense([...expense,{id:uid(),tittle,amount}])
//     }
//     function deleteExpense(id){
//           setExpense(expense.filter((exp)=> exp.id!= id))
//     }
//     console.log(expense)



// function deleteExpense(_id){
//     setExpense(expense.filter((exp)=>exp._id!=_id))
// }



// function editExpense(_id){
//   return(
//     <>
    
//     </>
//   )
// }

const addExpense=async(title,amount)=>{
    try{
        const response=await fetch('http://localhost:3000/expenses',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({title,amount})
        });
        if(response.ok){
            const newItem=await response.json();
            setExpense((prev)=>[...prev,newItem]);
        }
        else{
            console.error('failed to add expense');
        }
    }
    catch(error){
      console.log('error adding expense',error);
    }
};

const deleteExpense=async(id)=>{
    try{
        const response=await fetch(`http://localhost:3000/expenses/${id}`,{
        method:"DELETE",
        });
        if(response.ok){
            setExpense(expense.filter((exp)=>exp._id!==id));
        }
        else{
            console.error('failed to delete expense')
        }
    }
    catch(error){
        console.error('error in deleting expense',error)
    }
};
 
const editExpense = async(id,title,amount) => {
        try {
          const response = await fetch(`http://localhost:3000/expenses/${id}`,
          {
          method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
             body: JSON.stringify({ title, amount }),  
          });
          if(response.ok) {
            const updatedItem = await response.json();
            setExpense((prev)=>
              prev.map((exp) => (exp._id === id ? updatedItem : exp)));
        } else {
            console.log("Failed to update expense");
        }
    }catch (error) {
        console.error('Failed to edit expense', error);
    }
  }



    return(
        <>
        <div className='expense-container'>
        <h1>Expense Container</h1>
        <Balancecontainer  expense={expense}/>
       <History expense={expense} deleteExpense={deleteExpense} editExpense={editExpense} setItemToEdit={setItemToEdit}/>
        <Expenseform addExpense={addExpense} itemToEdit={itemToEdit} editExpense={editExpense} setItemToEdit={setItemToEdit}/>
        {/* {loading && <p>Loading...</p>} */}
        </div>
        </>
    )
}



export default Expensecontainer;