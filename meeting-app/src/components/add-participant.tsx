import {
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

export const Participant: React.FC = (props: any) => {

  return (
    <div>
        <Form  style={{border:"solid"}}>
            <FormGroup>
                <Label for="firstName">
                First Name
                </Label>
                <Input 
                    id="firstName"
                    name="firstName"
                    placeholder="Enter participant first name" 
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
                    placeholder="Enter participant last name" 
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
                    placeholder="Enter participant email" 
                    type="email"
                />
            </FormGroup>
        </Form>
    </div>
  );
}

export default Participant;