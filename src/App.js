
// rce : 클래스형 컴포넌트
// rafe : 함수형 컴포넌트 

import React, { useState } from 'react';
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';


const App = () => {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     expenses: [
  //       { id: 1, charge: '콜라', amount: 2000},
  //       { id: 2, charge: '빵', amount: 1000},
  //       { id: 3, charge: '맥북', amount: 20000}, 
  //     ]
  //   }
  // }

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '콜라', amount: 2000},
    { id: 2, charge: '빵', amount: 1000},
    { id: 3, charge: '맥북', amount: 20000}, 
  ])

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const handleCharge = (e) =>{
    setCharge(e.target.value);
  }

  const handleAmount = (e) =>{
    console.log(e.target.valueAsNumber)
    setAmount(e.target.valueAsNumber)
  }

  // initialExpenses = [
  //   { id: 1, charge: '콜라', amount: 2000},
  //   { id: 2, charge: '빵', amount: 1000},
  //   { id: 3, charge: '맥북', amount: 20000},
  // ] //배열 만들기, expenselist에 this로 배열 찍어주고, 해당 js에서도 props로 찍어줌 

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)

    setExpenses(newExpenses)

  }

  const handleSubmit = (e) =>{
    e.preventDefault(); //제출 눌러도 리프레쉬 안되게 함 
    if (charge !=="" && amount > 0) {
      const newExpense = { id:crypto.randomUUID(), charge, amount };
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);
    }else{
      console.log('error');
    }
    }
  
  

    return (
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
            {/* Expense Form*/}
            <ExpenseForm charge={charge} handleSubmit={handleSubmit} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount}/>
          </div>
          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
           {/* Expense List*/}
            <ExpenseList  initialExpenses={expenses} handleDelete={handleDelete} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
            <p style={{ fontSize: '2rem' }}>총합계:</p>
        
          </div>
       
        </div>
      </main>    )
  }


export default App;