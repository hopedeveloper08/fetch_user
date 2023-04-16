import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {useQuery} from 'react-query'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


async function fetchData() {
  const {data} = await axios.get('https://json.xstack.ir/api/v1/users')    
  return data.data
}


const Loading = () => {
  return(
    <div className='loading'>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      <br /><br /><br /><br /><br /><br />
      <h1>Loading...</h1>
    </div>
  )
}


const Home = (props) => {
  return(
    <>
      <ul className='user-email'>
        {props.data.map(user => {
          return(
            <Link key={user.id} to='user-info/' state={user}><li>{user.email}</li></Link>
        )})}
      </ul>
    </>
  )
}


const Information = () => {
  const location = useLocation();  
  const user = location.state;

  return(
    <>
      <div className='information'>
        <div className='id'>{user.id}</div>
        <ul>
          <li className='info'><span>name</span> <span>{user.name}</span></li>
          <li className='info'><span>email</span> <span>{user.email}</span></li>
          <li className='date'>email verified at {user.email_verified_at.slice(0, 10)} at {user.email_verified_at.slice(11, 19)}</li>
          <li className='date'>created at {user.created_at.slice(0, 10)} at {user.created_at.slice(11, 19)}</li>
          <li className='date'>updated at {user.updated_at.slice(0, 10)} at {user.updated_at.slice(11, 19)}</li>
        </ul>

        <Link to='/'><div className='btn-to-home'>BACK TO HOME</div></Link>
      </div>
    </>
  )
}



function App() {
  const {data, error, isError, isLoading } = useQuery('get', fetchData)
  if (!isError) {
    if (!isLoading) {
      return(
        <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home data={data} />}/>
              <Route path='user-info/' element={<Information />}/>
            </Routes>
          </BrowserRouter>
        </>
      )
    } 
    else {
      return(
        <>
          <Loading />
        </>
      )
    }
  }
  else {
    return(
      <h1>{error}</h1>
    )
  }
}


export default App
