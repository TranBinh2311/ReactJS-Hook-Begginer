import logo from './logo.svg';
import './App.css';
import Nav from './view/Nav';
import { useState , useEffect } from 'react';
import Todos from './view/Todos';
import Form from './view/Form';
import Covid from './view/Covid';

const App = () => {

  const [name, setName] = useState('Binh');
  const [toggle, setToggle] = useState(true);
  const [address, setAdress] = useState('');
  const [todos, setTodos] =  useState([
    {
    id: 'todo1',
    title : "Watching video",
    type: "1",
    },
    {
      id: 'todo2',
      title : "Watching clip",
      type: "2",
    },
    {
      id: 'todo3',
      title : "Playing game",
      type: "1",
    },
    {
      id: 'todo4',
      title : "Reading book",
      type: "4",
    },
   ]);

   const handleEventClick = (event) =>{
    if(!address) {
      alert("Empty!!!");
      return;
    }
    //setToggle(!toggle)
    //toggle === true ? setName("Tran") : setName("Binh")
    setName(address);
    let newTodo = {id: Math.floor(Math.random()*1000+1), title: address}
    setTodos([...todos, newTodo]);
    setAdress('');

  }

  const handleEventChange = (event) =>{
    setAdress(event.target.value);
    //setTodos();
  }

  const handleDeleteData = (id) =>{
    let currentTodos = todos;
    currentTodos  = currentTodos.filter(item  => (id !== item.id))
    setTodos(currentTodos )
  }

  useEffect(()=>{
    console.log("Hello Effect");
  },[address])

  
  return (
    <div className="App">
      <Nav/>
      <img style= {{height: "100px", width : "100px"}} src={logo} className="App-logo" alt="logo" /> 
      <h1>Bảng tổng hợp Covid 19</h1> 
      <Covid/>
      {/* <Form
        address = {address}
        handleEventChange = {handleEventChange}
        handleEventClick = {handleEventClick}
      />
      <Todos
        todos= {todos}
        title = "All Title"
        handleDeleteData = {handleDeleteData}
      />

      <Todos
        todos= {todos.filter( item =>{return (item.type === '1')} )}
        title = "Binh Todo"
        handleDeleteData= {handleDeleteData}
      /> */}

    </div>
  );

  
}

export default App;
