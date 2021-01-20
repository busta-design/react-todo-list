// import '../App.css'; 
import { useState } from 'react'
import PropTypes from 'prop-types'

const TodoAdder = ({ handleAdd }) => {
   const [contentHolder, setContentHolder] = useState("")

   const handleChange = (e) =>{
      setContentHolder(e.target.value)
      console.log(contentHolder)
   }

   return (
      <div className="App-header-search" >
         <input className="InputText" type="text" size="40" placeholder="Add to do..." onChange={handleChange} 
               value={contentHolder}
         />
         <input className="App-header-button" type="submit" name="button_add" value="Add" 
            // onClick={ () => handleAdd(contentHolder)} 
         />
               
      </div>
   )
}

// TodoAdder.propTypes = {
//    handleAdd: PropTypes.func.isRequired
// }

export default TodoAdder;