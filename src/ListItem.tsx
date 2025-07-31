import React from 'react'

const ListItem = (item: string, index: number, deleteItem: (index: number) => void) => {
  return (
    <div className='listItem' style={{ display: 'flex', alignItems: 'center' }}>
      <h2 key={'item' + index} style={{ margin: '4px', overflow: 'auto' }}>{`${index + 1}: ${item}`}</h2>
      <button className='deleteButton' type='button' onClick={() => deleteItem(index)}>X</button>
    </div>
  )
}

export default ListItem
