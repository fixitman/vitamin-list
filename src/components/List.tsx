import React, { useState } from 'react'
import './List.css'
import { item } from '../data'


function List(props: { list: item[] }) {
  const [items, setItems] = useState<item[]>(props.list)

  const deleteItem = (id: number) => {
    let newList = items.filter(i => i.id !== id)
    setItems(newList)
  }

 
  return (
    <ul>
      {
        items.length === 0 && <li className='emptyItem'>Nothing to do!</li>
      }


      {
        items.length > 0 && (
          items.map((i) => (<li key={i.id} >
            <input id={i.id.toString()} type='checkbox' />
            <label htmlFor={i.id.toString()}>{i.todo}</label>
            <button
              className='deleteButton'
              onClick={() => deleteItem(i.id)}
            >
              X </button>
          </li>)
          )
        )
      }
    </ul>

  )
}

export default List