import {item} from '../data'


export interface ListItemProps {
    listItem: item,
    deleteItem: (id:number)=>void
}


const ListItem = (props: ListItemProps) =>{
    let i = props.listItem
  return (
    <li key={i.id} >
            <input id={i.id.toString()} type='checkbox' />
            <label htmlFor={i.id.toString()}>{i.todo}</label>
            <button
              className='deleteButton'
              onClick={() => props.deleteItem(i.id)}
            >
              X </button>
          </li>
  )
}

export default ListItem