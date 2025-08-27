import React, { FormEvent, useState } from 'react'
import { ListItem } from './components/ListItem'
import { Card } from './components/Card'

export const App = () => {
  const [item, setItem] = useState('')
  const [list, setList] = useState([] as string[])

  const deleteItem = (index: number) => {
    setList(list.slice(0, index).concat(list.slice(index + 1)))
  }

  const listOutput = list.map((item, index) => <ListItem item={item} index={index} deleteItem={deleteItem} />)
  const noItems = <div className='listItem'>All done, no items!</div>
  const content = listOutput.length ? listOutput : noItems

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (item === '') {
      return
    }

    setList(list.concat(item))
    setItem('')
  }

  const onChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement
    setItem(value)
  }

  return (
    <div className='app'>
      <Card className='card'>
        <h2>To Do List</h2>
        <div className='divider' />
        <form onSubmit={onSubmit}>
          <label htmlFor='item'>Add item: </label>
          <input id='item' type='text' value={item} onChange={onChange} />
          <button type='submit'>+</button>
        </form>
        {content}
      </Card>
    </div>
  )
}
