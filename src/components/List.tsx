import React, { useState } from 'react'
import './List.css'
import { item } from '../data'
import ListItem from './ListItem'


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

          items.map((i) => (
          
          <ListItem listItem={i} deleteItem={deleteItem}/>)
          )
        )
      }
    </ul>

  )
}

export default List