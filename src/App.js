
// rce : 클래스형 컴포넌트
// rafe : 함수형 컴포넌트 

import React, { Component } from 'react'
import "./App.css";

export class App extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>

          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>Expense Form</div>
          <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>Expense List</div>
          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
            <p style={{ fontSize: '2rem' }}>총합계:</p>
        
          </div>
       
        </div>
      </main>    )
  }
}

export default App