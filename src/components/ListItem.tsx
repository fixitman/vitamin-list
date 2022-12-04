import { ChangeEventHandler, MouseEventHandler } from 'react'
import {item} from '../data'


export interface ListItemProps {
    listItem: item,
    deleteItem: (id:number)=>void
    updateItem: (i:item)=>void
}



const ListItem = (props: ListItemProps) =>{
  let i = props.listItem  
  
  const onCheckChange:ChangeEventHandler<HTMLInputElement> = (e) =>{   
    let newItem = {...i}    
    newItem.completed = !newItem.completed    
    props.updateItem(newItem)
  }

  return (
    <li className='listItem' draggable key={i.id} >
            
              <input id={i.id.toString()} type='checkbox' checked={i.completed}  onChange={onCheckChange}/>
              <label  htmlFor={i.id.toString()}>{i.todo}</label>
              <button
                className='deleteButton'
                onClick={() => props.deleteItem(i.id)}
              >
                X </button>
            
          </li>
  )
}

export default ListItem