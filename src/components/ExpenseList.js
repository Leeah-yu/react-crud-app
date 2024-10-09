import React from 'react'

import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';



const ExpenseList = ({expenses, initialExpenses, handleDelete, handleEdit, cLearItems}) => {
  return (
    <>
        <ul className='list'>
          {initialExpenses.map((expense) => {
            return (
              <ExpenseItem key={expense.id} expense={expense} 
              handleDelete={handleDelete} handleEdit={handleEdit}/>
            );
          })}
        </ul>
        {expenses.length > 0 ?
        <button className='btn' onClick={cLearItems}>
          목록지우기
          <MdDelete className='btn-icon'></MdDelete>
        </button>
        :null
}
    </>
  )
}

export default ExpenseList


