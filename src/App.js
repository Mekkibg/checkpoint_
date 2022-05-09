import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import UserList from './UserList';

function App() {

const [userList,setUserList]=useState([])
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {setUserList(res.data)
  
  },[])
})
    return (
    <div className="App" style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around', alignItems:'center',}}>
      {userList.map((el)=> (<UserList user={el} />   ) )}
    </div>
  );
}

export default App;
