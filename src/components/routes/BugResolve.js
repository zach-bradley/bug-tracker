import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import {Container, Form, Input, Button, List} from 'reactstrap';
import { updateBug } from '../../redux/actions/actions';


function BugResolve() {
  const id = useParams().bugId;
  const [input, setInput] = useState("");
  const bug = useSelector(st => st.bugs[id])
  const dispatch = useDispatch();
  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateBug(id, input))
  }
  return (
    <div>
      <Container>
        <h5>Reference Number: {bug.id}</h5>
        <hr/>
        <div>
          <p><strong>Issue Description:</strong> {bug.desc}</p>
          <p><strong>Contact:</strong> {bug.contact}</p>
          <p><strong>Priority: </strong> {bug.priority}</p>
        </div>
        <hr/>
        <div>
          <h5>Activity:</h5>
          <List type="unstyled">
            {bug.activity.map(act => <li key={act.timestamp}><b>{act.timestamp}</b> - {act.desc}</li> )}
          </List>
          <Form onSubmit={handleSubmit}>
          <Input type="text" onChange={handleChange}/>
          <Button color="primary" className="mt-3">Submit</Button>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default BugResolve
