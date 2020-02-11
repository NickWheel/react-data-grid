import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from 'react-redux';
import ReactDataGrid from "react-data-grid";


export default function(props) {
  const users = useSelector( (state) => state.users);
  const dispatch = useDispatch();

  const [ usersState, setUsersState ] = useState(users); 
  // const setChangeCheckBox = () => setUsersState(!usersState)

  const columns = [
    { key: "id", name: "ID", editable: true },
    { key: "name", name: "Name", editable: true },
    { key: "username", name: "UserName", editable: true },
    { key: 'email', name: 'Email', editable: true }
  ];

  let rows = usersState;
  // state = { rows };

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
  
    const rowsUpd = rows.slice();
    for (let i = fromRow; i <= toRow; i++) {
      rowsUpd[i] = { ...rowsUpd[i], ...updated };
    }
    setUsersState(rowsUpd);
  };
  
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      onGridRowsUpdated={onGridRowsUpdated}
      enableCellSelect={true}
    />
  );
  
}
