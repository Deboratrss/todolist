import React, { useState, useEffect, useRef } from 'react';
import '../style/App.css';

function TodoForm(props){
    const [input, setInpute] = useState(props.edit ? props.edit.value
    : '');

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    });

    const handleChange = e => {
      setInpute(e.target.value);
    };
    
    const handleSubmit = e => {
      e.preventDefault();
   
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
     });
  
      setInpute('')
    }; 
  
    return (
      <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? ( 
          <>
        <input 
          type='text' 
          placeholder='Update your item' 
          value={input}
          onChange={handleChange}
          name='texto' 
          className='todo-input edit'
          ref={inputRef}
        />
        <button className='todo-button edit'>Update</button>
        </>
        ) : ( 
        <>
        <input 
          type='text' 
          placeholder='add a todo' 
          value={input}
          onChange={handleChange}
          name='texto' 
          className='todo-input'
          ref={inputRef}
        />
        <button className='todo-button'>Add todo</button>
      </>
      )
      }

        
      </form>
    );
  }

  export default TodoForm;