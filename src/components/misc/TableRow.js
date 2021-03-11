import React from 'react';
import {Link} from 'react-router-dom';

function TableRow({id, desc, date, priority}) {

  return (
    <tr>
      <td><Link to={`/bugs/${id}`}>{id}</Link></td>
      <td>{desc}</td>
      <td>{date}</td>
      <td>{priority}</td>
    </tr>
  )
}

export default TableRow
