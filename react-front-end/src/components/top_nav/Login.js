import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function TopNav() {
  return (
    <Form>
      <Form.Group className="form-floating mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" id="floatingInput" />
        <Form.Label>Email address</Form.Label>
      </Form.Group>

      <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" id="floatingInput" />
        <Form.Label>Password</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
};