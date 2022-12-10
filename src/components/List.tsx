import { useEffect, useState } from 'react'
import './List.css'
import { item } from '../data'
import ListItem from './ListItem'


function List({ items, deleteItem, updateItem, moveItem, }
  :{items:item[], 
    deleteItem:(a:number)=>void, 
    updateItem:(a:item)=>void, 
    moveItem:(a:number,b:number)=>void}) {

      let sorted = !true;

      let sortedItems = [...items]

      if(sorted){
        sortedItems.sort((a,b)=> +a.completed - +b.completed)
      }


  return (
    <ul id='itemList'>
      {
        sortedItems.length === 0 && (<li className='emptyItem'>Nothing to do!</li>)
        ||
        (
          sortedItems.map((i, index) => (
            <ListItem key={i.id} index={index} listItem={i} deleteItem={deleteItem} updateItem={updateItem} moveItem={moveItem} />)
          )
        )
      }
    </ul>

  )
}

export default List