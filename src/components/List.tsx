import { useState } from 'react'
import './List.css'
import { item } from '../data'
import ListItem from './ListItem'


function List(props: { list: item[] }) {
  const [items, setItems] = useState<item[]>(props.list)

  const deleteItem = (id: number) => {
    let newList = items.filter(i => i.id !== id)
    setItems(newList)
  }

  const updateItem = (newItem: item) => {
    let newList: item[] = []
    items.forEach((i) => {
      newList.push(i.id === newItem.id ? newItem : i)
    })
    setItems(newList)
  }


  return (
    <ul id='itemList'>
      {
        items.length === 0 && (<li className='emptyItem'>Nothing to do!</li>)
        ||
        (
          items.map((i) => (
            <ListItem  key={i.id} listItem={i} deleteItem={deleteItem} updateItem={updateItem} />)
          )
        )
      }
    </ul>

  )
}

export default List