import React from 'react'
import { useParams } from 'react-router-dom'

const DigitalMenu = () => {
    const {id} = useParams()

  return (
    <div>DigitalMenu {id}</div>
  )
}

export default DigitalMenu