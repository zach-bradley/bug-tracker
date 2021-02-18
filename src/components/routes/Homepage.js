import React from 'react';
import {Table} from 'reactstrap';
import {Link} from 'react-router-dom';

function Homepage() {
  return (
    <div className="mx-5">
      <h3>Current Open Issues: </h3>
      <Table bordered >
        <thead>
          <tr>
            <th>Reference Number</th>
            <th>Description</th>
            <th>Date Submitted</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to={`/bugs/RFN1254862`}>RFN1254862</Link></td>
            <td>Associate can't log in</td>
            <td>02/01/2021</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>RFN1254862</td>
            <td>Associate can't log in</td>
            <td>02/01/2021</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>RFN1254862</td>
            <td>Associate can't log in</td>
            <td>02/01/2021</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>RFN1254862</td>
            <td>Associate can't log in</td>
            <td>02/01/2021</td>
            <td>Low</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Homepage
