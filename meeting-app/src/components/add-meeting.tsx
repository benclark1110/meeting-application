import {
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';

export const Meeting: React.FC = (props: any) => {

  return (
    <div>
        <Form style={{border:"solid"}}>
            <FormGroup>
                <Label for="meetingType">
                Select a meeting type:
                </Label>
                <Input 
                    id="meetingType" 
                    name="meetingType" 
                    type="select" 
                    placeholder="Please select a meeting type"
                >
                    <option>
                        Deposition
                    </option>
                    <option>
                        Arbitration
                    </option>
                    <option>
                        General
                    </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="case">
                Select a case:
                </Label>
                <Input 
                    id="case" 
                    name="case" 
                    type="select" 
                    placeholder="Please select a case"
                >
                    <option>
                        John Doe vs. ACME Corporation
                    </option>
                    <option>
                        Jane Doe vs. John Doe
                    </option>
                    <option>
                        ACME Corporation vs. ACME Financial
                    </option>
                    <option>
                        ACME Global vs. Jane Doe
                    </option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="numberOfParticipants">
                How many participants will be in this meeting:
                </Label>
                <Input 
                    id="numberOfParticipants" 
                    name="numberOfParticipants" 
                    type="select" 
                    placeholder="Select the number of participants"
                >
                    <option>
                        1
                    </option>
                    <option>
                        2
                    </option>
                    <option>
                        3
                    </option>
                    <option>
                        4
                    </option>
                </Input>
            </FormGroup>
        </Form>
    </div>
  );
}

export default Meeting;