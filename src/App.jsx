import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function fetchData() {
  let [data, setData] = useState([])
  
  useEffect( () => {
    fetch('https://json.xstack.ir/api/v1/users')
    .then((response) => response.json())
    .then(setData)
  }, [])

  return data.data
}


function App() {
  let data = fetchData() 
  if (data) {
    return (
      <>
        <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>email_verified_at</th>
            <th>created_at</th>
            <th>updated_at</th>
          </thead>
          {data.map(user => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>date: {user.email_verified_at.slice(0, 10)}<br />time: {user.email_verified_at.slice(11, 19)}</td>
                <td className='created_at'>date: {user.created_at.slice(0, 10)}<br />time: {user.created_at.slice(11, 19)}</td>
                <td className='updated_at'>date: {user.updated_at.slice(0, 10)}<br />time: {user.updated_at.slice(11, 19)}</td>
              </tr>
            )
          })}
        </table>
      </>
    )
  }
  else {
    return(
      <>
        <h2>429 | TOO MANY REQUESTS</h2>
        <h4>Please wait and reload page again...</h4>
      </>
    )
  }
}

export default App
