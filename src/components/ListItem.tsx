import { ChangeEventHandler, MouseEventHandler } from 'react'
import { item } from '../data'


export interface ListItemProps {
  listItem: item,
  deleteItem: (id: number) => void
  updateItem: (i: item) => void
  moveItem:(from:number,to:number) => void
  index: number
}



const ListItem = (props: ListItemProps) => {
  let i = props.listItem
  let index = props.index


  const onCheckChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let newItem = { ...i }
    newItem.completed = !newItem.completed
    props.updateItem(newItem)
  }

  const dragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData('item1', index.toString())
  }
  const drop = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault()
    let src: number = +(e.dataTransfer.getData('item1'))
    console.log(`dropping ${src} on ${index}`)
    props.moveItem(src,index)
  }

  const dragOver = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault()
    //console.log("over",id)
    e.dataTransfer.dropEffect = 'move'
  }



  return (
    <li className='listItem' draggable onDragStart={(e) => dragStart(e, index)} onDrop={(e) => drop(e, index)} onDragOver={(e) => dragOver(e, index)} key={i.id} >

      <input id={i.id.toString()} type='checkbox' checked={i.completed} onChange={onCheckChange} />
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

