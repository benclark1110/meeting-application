import {
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
import API from "../../src/db/API"
import axios from "axios";


export const Case: React.FC = (props: any) => {
    const getIntakeData = () => {
        return axios.get("http://localhost:3001");
    }

    return (
        <div>
            <Form style={{border:"solid"}}>
                <FormGroup>
                    <Label for="caseName">
                    Case Name
                    </Label>
                    <Input 
                        id="caseName"
                        name="caseName"
                        placeholder="with a placeholder" 
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="caseDescription">
                    Case Description
                    </Label>
                    <Input 
                        id="caseDescription"
                        name="caseDescription"
                        placeholder="with a placeholder" 
                        type="textarea"
                    />
                </FormGroup>
            </Form>
        </div>
    );
}

export default Case;