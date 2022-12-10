import { ChangeEventHandler, MouseEventHandler, useEffect } from 'react'
import { item } from '../data'

export interface ListItemProps {
  listItem: item,
  deleteItem: (id: number) => void
  updateItem: (i: item) => void
  moveItem: (from: number, to: number) => void
  index: number
}



const ListItem = (props: ListItemProps) => {
  let i = props.listItem
  let index = props.index

  const handleCheckChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let newItem = { ...i }
    newItem.completed = !newItem.completed
    props.updateItem(newItem)
  }

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.dataTransfer.setData('item1', index.toString())
  }

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, dropIndex: number) => {
    e.preventDefault()
    let srcIndex: number = +(e.dataTransfer.getData('item1'))
    props.moveItem(srcIndex, dropIndex)
  }

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

 
  return (
    <li className='listItem'
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDrop={(e) => handleDrop(e, index)}
      onDragOver={(e) => handleDragOver(e)}
      key={i.id}
    >

      <input id={i.id.toString()} type='checkbox' checked={i.completed} onChange={handleCheckChange} />
      <label htmlFor={i.id.toString()} className={i.completed? 'strikeThru' : ''}>{`${i.todo}`}</label>
      <button
        className='deleteButton'
        onClick={() => props.deleteItem(i.id)}
      >
        X
      </button>

    </li>
  )
}

export default ListItem

