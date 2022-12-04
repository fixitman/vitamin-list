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

  const moveItem = (from: number, to:number)=>{
    if(from === to)return
    let newList = insertAndShift(items,from,to)
    setItems(newList)
  }

  const insertAndShift = (arr: any[], from: number,to: number) => {
    let newArray: item[] = [];
    const fromItem = arr[from];
    if (from > to) {
      const startToTo = (to > 0) ? arr.slice(0, to) : [];
      const toToFrom = arr.slice(to, from);
      const fromToEnd = arr.slice(from + 1, arr.length);
      newArray = newArray.concat(startToTo, [fromItem], toToFrom, fromToEnd);
    }
    
    if (to > from) {
      const startToFrom = (from > 0) ? arr.slice(0, from) : [];
      const fromToTo = arr.slice(from + 1, to + 1);
      const toToEnd = arr.slice(to + 1, arr.length);
      newArray = newArray.concat(startToFrom, fromToTo, fromItem, toToEnd);
    }
    return newArray;
  };


  return (
    <ul id='itemList'>
      {
        items.length === 0 && (<li className='emptyItem'>Nothing to do!</li>)
        ||
        (
          items.map((i,index) => (
            <ListItem  key={i.id} index={index} listItem={i} deleteItem={deleteItem} updateItem={updateItem} moveItem={moveItem}/>)
          )
        )
      }
    </ul>

  )
}

export default List