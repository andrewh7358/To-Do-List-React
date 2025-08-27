import React from 'react'

interface ListItemProps {
  item: string
  index: number
  deleteItem: (index: number) => void
}

export const ListItem = ({ item, index, deleteItem }: ListItemProps) => {
  const onClick = () => {
    deleteItem(index)
  }

  return (
    <div className='listItem'>
      <div>{`${index + 1}: ${item}`}</div>
      <button type='button' onClick={onClick}>-</button>
    </div>
  )
}
