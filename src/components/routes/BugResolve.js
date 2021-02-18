import React from 'react';
import {Container, Form, Input, Button, List} from 'reactstrap'

function BugResolve() {
  return (
    <div>
      <Container>
        <h5>Reference Number: RFN1254862</h5>
        <hr/>
        <div>
          <p><strong>Issue Description:</strong>  Associate can't log in</p>
          <p><strong>Contact:</strong> associate@associate.com</p>
          <p><strong>Priority: </strong> Low</p>
        </div>
        <hr/>
        <div>
          <h5>Activity:</h5>
          <List type="unstyled">
            <li>02/10/15 Messaged associate</li>
          </List>
          <Form>
          <Input type="text"/>
          <Button color="primary" className="mt-3">Submit</Button>
          </Form>
        </div>
      </Container>
    </div>
  )
}

export default BugResolve
