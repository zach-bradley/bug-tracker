import React from 'react';
import {Table} from 'reactstrap';
import TableHead from '../misc/TableHead';
import { useSelector } from 'react-redux';
import TableRow from '../misc/TableRow';

function Homepage() {
  const bugs = useSelector(st => Object.values(st.bugs))
  if(!bugs) return <h1>Loading</h1>;

  return (
    <div className="mx-5">
      <h3>Current Open Issues: </h3>
      <Table bordered >
        <thead>
          <TableHead headers={["Reference Number", "Description", "Date Submitted", "Priority"]} />
        </thead>
        <tbody>
          {bugs.map(bug => <TableRow key={bug.id} id={bug.id} desc={bug.desc} date={bug.date}  priority={bug.priority}/>)}   
        </tbody>
      </Table>
    </div>
  )
}

export default Homepage
