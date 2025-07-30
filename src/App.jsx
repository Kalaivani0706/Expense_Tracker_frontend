import React from 'react'
// import Expensecontainer from './components/Expensecontainer.jsx';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home.jsx';
import Post from './Post.jsx';
import Expensecontainer from './components/Expensecontainer.jsx';
function App() {
  return (
     <>
    <BrowserRouter>
    <Link to="expense">Expense</Link><br></br>
    <Link to="/">Home</Link>
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/expense' element={<Expensecontainer/>}/>
    <Route path='/user/:id' element={<Post/>}/>

    </Routes>
    </BrowserRouter>
     </>
)
}

export default App;
