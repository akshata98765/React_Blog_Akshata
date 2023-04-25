import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import noteActions from '../redux/actions/noteActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.scss';
const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const title = useSelector(state => state.inputs.title);
  const category = useSelector(state => state.inputs.category);
  const content = useSelector(state => state.inputs.content);
  const like= useSelector(state => state.inputs.like);
  const dispatch = useDispatch();

  

  const addNote = () => {
    if(title !=='' && category !==''&& content !=='' ){
      
      dispatch(noteActions.addNote({
        title,
        category,
        content,
        like
      }))
      alert("Blog Added Successfully!")
      dispatch(inputActions.resetInputs())
    }else{
      alert("Enter Complete Information..")
    }


    
  }
  const updateNote = () =>{
    if(title !=='' && category !=='' && content !==''){
      dispatch(noteActions.updateNote(id,{
        title,category,content
      }))
      alert("Blog Updated Successfully!")
      dispatch(inputActions.resetInputs(id))
    }else{
      alert("Enter Complete Information..")
    }
    
  }
  const deleteNote = () =>{
    if(window.confirm("Are you sure to Delete Blog..?")){
    dispatch(noteActions.deleteNote(id))
    alert("Your Blog Successfully Deleted!")
    dispatch(inputActions.resetInputs())
  }}
  return (
    
    <div className="InputSection__container">
      <input 
      type="text" 
      placeholder='Blog title' 
      value={title}
      onChange ={e => 
        dispatch(inputActions.setInputTitle(e.target.value))
      }
      />
     
     <input 
      type="text" 
      placeholder='Blog category' 
      value={category}
      onChange ={e => 
        dispatch(inputActions.setInputCategory(e.target.value))
      }
      />

    

      <textarea placeholder='Blog content'
      value={content}
      onChange ={e => 
        dispatch(inputActions.setInputContent(e.target.value))
      }
      
      >

      </textarea>
      <div
      className='InputSection__container__btnWrapper'
      >
        
        
        <button
        onClick={id === -1? addNote: updateNote}  
      >
        {id === -1 ? "ADD POST": "UPDATE POST"}
      </button>
      
      {id !== -1 &&
        <button
        onClick={deleteNote}
        style={{ marginLeft: '1em'
        , backgroundColor: 'red'
      }}
      >
        DELETE POST
      </button>
      
      }
      
      

      </div>
      
    </div>
  )
}

export default InputSection;
