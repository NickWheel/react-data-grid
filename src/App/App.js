import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import DataGrid from 'react-data-grid';
import MainPage from '../containers/MainPage';


function App() {

  const counter = useSelector( (state) => state.counter);
  const users = useSelector( (state) => state.users);
  const dispatch = useDispatch();

  // const columns = [
  //   { key: "id", name: "ID", editable: true },
  //   { key: "title", name: "Title", editable: true },
  //   { key: "complete", name: "Complete", editable: true }
  // ];
  
  // const rows = [
  //   { id: 0, title: "Task 1", complete: 20 },
  //   { id: 1, title: "Task 2", complete: 40 },
  //   { id: 2, title: "Task 3", complete: 60 }
  // ];
  // const rowGetter = rowNumber => rows[rowNumber];
  return (

    <div className='App'>
      <MainPage />
      <header className='App-header' >
        <h1>Counter: {counter}</h1>
        <button onClick={(()=>dispatch({type:'INCREMENT'}))}>INCREMENT</button>
        <button onClick={(()=>dispatch({type:'DECREMENT'}))}>DECREMENT</button>
      </header>
      {/* <DataGrid
        columns={columns}
        rowGetter={rowGetter}
        rowsCount={rows.length}
      /> */}
      {users.map((el, idx) => <h2>{el.name}</h2>)}
    </div>
  );
}

export default App;
