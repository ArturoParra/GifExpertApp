import { useState } from "react";


const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({target}) => {
    setinputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <=1 ) return;
    
    onNewCategory( inputValue.trim() )
    setinputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input value={inputValue} type="text" placeholder="Buscar GIFs..." onChange={onInputChange}>
      </input>
    </form>
  )
}

export default AddCategory;