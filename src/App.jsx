import React from 'react'
import TablesList from './components/TablesList'
import DigitalMenusList from './components/DigitalMenusList'

const App = () => {
  return (
    <div className='mx-auto'>
      <DigitalMenusList />
      <TablesList />
    </div>
  )
}

export default App