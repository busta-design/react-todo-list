// import {useState} 
import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList'
import TodoAdder from './components/TodoAdder'


const COLOR_1 = '#920DFA';
const COLOR_2 = '#480BDE';
const COLOR_3 = '#0300F5';
const COLOR_4 = '#0B3FDE';
const COLOR_5 = '#0D86FA';

const App = () => {
  const [ list, setList] = useState([
    {
      id: 1,
      task: "Primera tarea",
      done: false,
      color: COLOR_1
    },{
      id: 2,
      task: "Segunda tarea",
      done: false,
      color: COLOR_2
    },{
      id: 3,
      task: "Tercera tarea",
      done: false,
      color: COLOR_3
    }]);

  const handleAdd = (contentHolder) => {
    console.log(contentHolder)
  }

  return (
    <div className="App">
    
    
      <header className="App-header">
        <h1>Bienvenido Andres a tu lista de quehaceres</h1>
        
        <TodoAdder onAdd={handleAdd}/>

      </header>
      <div className="App-body">
        
        { 
          list.map( (element) => <TaskList 
                                    task={element.task} 
                                    color={element.color} 
                                    done={element.done}
                                    key={element.id}
                                  /> ) 
        }
         
      </div>
    
    
    </div>
  );
}
export default App;