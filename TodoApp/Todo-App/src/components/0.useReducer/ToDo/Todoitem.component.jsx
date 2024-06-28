import React from 'react'

function Todoitemcomponent({listKey, todo}) {
  return (
        <li key={listKey}>{todo}</li>
  )
}

export default Todoitemcomponent