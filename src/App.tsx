import './App.css'
import List from './components/List'
import dataList from './data'

let text = 'Hello!!'

function App() {
  
  return (
    <>
      <List list={dataList}/>
    </>
  )
}

export default App
