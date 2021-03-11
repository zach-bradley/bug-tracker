import React from 'react'

function TableHead({headers}) {
  return (
    <tr>
      {headers.map(header => <th>{header}</th>)}
    </tr>
  )
}

export default TableHead
