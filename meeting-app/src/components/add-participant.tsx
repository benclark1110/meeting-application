import {
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

const Participant = (props: any) => {

  return (
    <div>
        <Form>
            <FormGroup>
                <Label for="firstName">
                First Name
                </Label>
                <Input 
                    id="firstName"
                    name="firstName"
                    placeholder="with a placeholder" 
                    type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">
                Last Name
                </Label>
                <Input 
                    id="lastName"
                    name="lastName"
                    placeholder="with a placeholder" 
                    type="text"
                />
            </FormGroup>
            <FormGroup>
                <Label for="participantEmail">
                Email
                </Label>
                <Input 
                    id="participantEmail" 
                    name="participantEmail" 
                    placeholder="with a placeholder" 
                    type="email"
                />
            </FormGroup>
        </Form>
    </div>
  );
}

export default Participant;