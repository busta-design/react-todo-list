// https://todo-list-fa452.web.app
import { useState } from 'react';
import './App.css';
// import TaskList from './components/TaskList'
// import TodoAdder from './components/TodoAdder'
import DeleteButton from './icons/delete.svg'
import UpdateButton from './icons/update.svg'

const COLOR_1 = '#920DFA';
const COLOR_2 = '#480BDE';
const COLOR_3 = '#0300F5';
const COLOR_4 = '#0B3FDE';
const COLOR_5 = '#0D86FA';

const App = () => {
  const [ newItem, setNewItem] = useState("")
  const [ list, setList] = useState([])
  const [ itemEdit, setItemEdit] = useState("")

  const colorRandom = () => {
    let numeroRandom = Math.floor(Math.random()*5)
    switch(numeroRandom) {
      case 0:
        return COLOR_1
      case 1:
        return COLOR_2
      case 2:
        return COLOR_3
      case 3:
        return COLOR_4
      case 4:
        return COLOR_5
      default:
        return COLOR_2
      
    }
  }

  const handleDelete = id => setList(list.filter( item =>  item.id !== id))

  const handleEditClick = (id, value) => {
    const editItemList = list.map( elem => {
      if(elem.id === id) {
        if(!elem.edit) {
          setItemEdit(elem.value)
          return {
            ...elem,
            edit: true,
            value: itemEdit
          }
        } else {
          return {
            ...elem,
            edit: false,
            value: itemEdit
          }
        }
      }
      return elem
    });
    // setItemEdit("")
    setList(editItemList)

    
  }

  const handleEditInput = e => {
    setItemEdit(e.target.value)
  }

  const handleChange = e => {
    setNewItem(e.target.value)
    // console.log(newItem)
  }

  const handleAdd = () => {
    const color = colorRandom()
    const auxNewItem = {
      id: 1 + Math.random(),
      value: newItem,
      color,
      edit: false,
    }

    const newList = [...list]

    newList.push(auxNewItem);

    setList(newList)
    setNewItem("")
  }

  return (
    <div className="App">
    
    
      <div className="App-header">
        <h1>Bienvenido Andres a tu lista de quehaceres</h1>
        <div className="App-header-search" >
          <input 
            className="InputText" 
            type="text" 
            size="40" 
            placeholder="Add to do..." 
            onChange={handleChange} 
            value={newItem}
          />

          <input 
            className="App-header-button" 
            type="submit" 
            name="button_add" 
            value="Add" 
            onClick={ () => handleAdd()} 
          />
               
        </div>
        

      </div>
      
      
      {/* //USAR UN IF... PARA ABRIR Y CERRAR UN POSIBLE INPU/T PARA MOSTRAR UN NUEVO CUADRO DE INGRESO PARA EL "UpdateButton" */}

      {
        list.map( 
          elem =>(
            <div className="App-body">
              <button className="Button" style={{backgroundColor:elem.color}} key={elem.id} >
                
                <span 
                  className="Body-span" 
                  style={{display: (!elem.edit) ? 'block' : 'none'}} 
                >
                  {elem.value}
                </span>
                
                <input 
                  type="text" 
                  className="Body-span" 
                  value={itemEdit}
                  onChange={handleEditInput} 
                  style={{display: elem.edit ? 'block' : 'none'}}
                />


                <input type="image" alt="delete" src={DeleteButton} className="Image" onClick={ () => handleDelete(elem.id)} />
                <input type="image" alt="update" src={UpdateButton} className="Image" onClick={ () => handleEditClick(elem.id, elem.value)} />

              </button>
            </div>
          )
        )
      }

        
    
    </div>
  );
}
export default App;