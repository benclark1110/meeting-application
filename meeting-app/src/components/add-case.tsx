import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
  } from 'reactstrap';
import axios from "axios";
import { IMeeting } from '../interfaces/meeting.types';

export const Case: React.FC = (props: any) => {
    const [cases, setCases] = useState('' as IMeeting);

    const addCase = () => {
        return axios.post("http://localhost:3001/cases", cases);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        else {
            addCase();
        }
    };

    return (
        <div>
            <Form style={{border:"solid"}} onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="caseName">
                    Case Name
                    </Label>
                    <Input 
                        id="caseName"
                        name="caseName"
                        placeholder="with a placeholder" 
                        type="text"
                        onChange={(e:any) => setCases({ ...cases, name: e.target.value })}
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
                        onChange={(e:any) => setCases({ ...cases, description: e.target.value })}
                    />
                </FormGroup>
                <Button  type="submit" style={{backgroundColor: "#F37660", border:"none"}}>Add Case</Button>
            </Form>
        </div>
    );
}

export default Case;