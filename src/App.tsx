import React, { FormEvent, useState } from 'react'
import ListItem from './ListItem'

const App = () => {
  const [item, setItem] = useState('')
  const [list, setList] = useState([] as string[])

  const deleteItem = (index: number) => {
    setList(list.slice(0, index).concat(list.slice(index + 1)))
  }

  const listOutput = list.map((v, i) => ListItem(v, i, deleteItem))
  const noItems = <h2 className='listItem' style={{ padding: '4px' }}>Add your first item</h2>

  const onChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    setItem(value)
  }

  const onSubmit = (e: FormEvent, item: string) => {
    e.preventDefault()

    if (item === '') {
      return
    }

    setList(list.concat(item))
    setItem('')
  }

  return (
    <>
      <h1>To Do List</h1>
      <form style={{ width: '600px' }} onSubmit={(e) => onSubmit(e, item)}>
        <input type='text' name='item' value={item} onChange={onChange}/>
        <button type='submit'>Add Item</button>
      </form>
      {listOutput.length ? listOutput : noItems}
    </>
  )
}

export default App
