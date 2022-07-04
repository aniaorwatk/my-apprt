import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'



interface IUserProps{
  nameU: string; 
  email: string; 
  roles: string[]
}

const User = ({nameU, email, roles=[]}: IUserProps)=>{

  return(
    <li>
      {nameU} ({email}) [{roles.map((role:string)=>role)}]
    </li>
  )
}

interface IHelloProps {
  name:string,
  message:string
}

const UserList =()=> {
  return(
    <ul>
      <User nameU={"Adam"} email={"adam@kskkss.com"} roles={['admin']}/>
    </ul>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList/>
        <Greeting />
      </header>
    </div>
  );
}

export default App;
