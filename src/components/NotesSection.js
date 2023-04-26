import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import NoteItem from './NoteItem';
import inputActions from '../redux/actions/inputActions';
import './NotesSection.style.scss';

const NotesSection = () => {
const dispatch = useDispatch();
const notes = useSelector(state => state.notes.notes)
const [like, setCount] = useState(0);//inouo

const onItemClicked =(item, index) => {
  dispatch(inputActions.setInputId(index));
  dispatch(inputActions.setInputTitle(item.title));
  dispatch(inputActions.setInputCategory(item.category));
  dispatch(inputActions.setInputContent(item.content));
  dispatch(inputActions.setInputLike(item.like));
}
const onItemLiked=(item,index) => {
  setCount(item.like++)
}
const onItemDiLiked=(item,index) => {
  setCount(item.like--)
}
if(notes.length ===0){
    return (
        <div className='NotesSection__container__empty'>
            <p>There is No Blog to show!</p>
        </div>
    )
}  

return (
    <div className='NotesSection__container'>
      
      


      {notes.map((item,index)=>{
        if(item){
          return (
            <>

           
            <NoteItem 
            title={item.title}
            category={item.category}
            content= {item.content}
            like={item.like}
            onItemClicked={() =>{
              onItemClicked(item, index);
            }}
            
        />
             <div>
              
              <button  className="button-9" role="button"
              
              onClick={() =>onItemLiked(item, index)}>
                <img src ="%PUBLIC_URL%/../like.png" alt='like logo' width={40} height={40}/>
              </button>

              <button  className="button-9 button-10" role="button"
              
              onClick={() => onItemDiLiked(item,index)}>
              <img src ="%PUBLIC_URL%/../Dislike.png" alt='Dislike logo' width={40} height={40}/>
              </button>
              <p>You liked the blog {item.like} times</p>
            </div>

           </>
          )
        }
        return null;
      }
        
      )}
      
    </div>
  );
};

export default NotesSection
