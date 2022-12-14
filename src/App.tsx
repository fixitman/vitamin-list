import { FormEventHandler, useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import SingleInputForm from './components/SingleInputForm'
import { item } from './data'
import ListDataLocal, {DataProvider} from './DataProvider'



function App() {

  let dataProvider: DataProvider<item[]> = ListDataLocal.instance
  let [items, setItems] = useState([] as item[])

  const saveItems = (newItems: item[])=>{
    setItems(newItems) // updates UI
    dataProvider.saveData(newItems)  // persists data
    console.log('Data saved')
  }
  
  const deleteItem = (id: number) => {
    let newList = items.filter(i => i.id !== id)
    saveItems(newList)
  }

  const updateItem = (newItem: item) => {
    let newList: item[] = []
    items.forEach((i) => {
      newList.push(i.id === newItem.id ? newItem : i)
    })
    saveItems(newList)
  }

  const moveItem = (from: number, to: number) => {
    if (from === to) return
    let newList = insertAndShift(items, from, to)
    saveItems(newList)
  }

  const insertAndShift = (arr: any[], from: number, to: number) => {
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


  const createNewId = () => {
    if (items.length > 0)
      return Math.max(...(items.map(item => item.id))) + 1

    return 1
  }

  let onAddItem: FormEventHandler = (e) => {
    e.preventDefault()
    let target = e.target as HTMLFormElement & {
      text: HTMLInputElement
    }
    let text = target.text.value.trim()
    target.text.value = ''

    if (text.length === 0) return

    let newId = createNewId()

    let newItem: item = {
      completed: false,
      id: newId,
      todo: text,
      userId: 1

    }
    saveItems([...items, newItem])


  }

  useEffect(()=>{
    setItems(dataProvider.loadData())
    console.log('loading...')
  },[])

  return (
    <>
      <SingleInputForm handleSubmit={onAddItem} />
      <List items={items} deleteItem={deleteItem} updateItem={updateItem} moveItem={moveItem} />
    </>
  )
}

export default App
