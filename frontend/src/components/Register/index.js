import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import {
  Container,
  Form,
  FormButton,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  FormContent,
  Text,
} from "./SigninElement";

const Register = () => {
  const [teamName, setTeamName] = useState();
  const [university, setUniversity] = useState();
  const [country, setCountry] = useState();
  const [teamCaptain, setTeamCaptain] = useState();
  const [captainEmail, setCaptainEmail] = useState();
  const [captainNumber, setCaptainNumber] = useState();
  const [member1, setMember1] = useState();
  const [member2, setMember2] = useState();
  const [filePdf, setFilePdf] = useState();

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    const newParticipant = {
      teamName,
      university,
      country,
      teamCaptain,
      captainEmail,
      captainNumber,
      member1,
      member2,
      filePdf,
    };
    const registerRes = await Axios.post(
      "/api/participants/register",
      newParticipant
    );
    history.push("/");
  };
  return (
    <Container>
      <FormWrap>
        {/* <Icon to="/">cens</Icon> */}
        <FormContent>
          <Form action="#" onSubmit={submit}>
            <FormH1>Register your team!</FormH1>
            <FormLabel htmlFor="for">Team Name</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Team Name"
              onChange={(e) => setTeamName(e.target.value)}
            />
            <FormLabel htmlFor="for">University/Institution</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Universitas Indonesia"
              onChange={(e) => setUniversity(e.target.value)}
            />
            <FormLabel htmlFor="for">Country of Origin</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Indonesia"
              onChange={(e) => setCountry(e.target.value)}
            />
            <FormLabel htmlFor="for">Name of Team Captain</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="placeholder"
              onChange={(e) => setTeamCaptain(e.target.value)}
            />
            <FormLabel htmlFor="for">Team Captain's Email</FormLabel>
            <FormInput
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setCaptainEmail(e.target.value)}
            />
            <FormLabel htmlFor="for">Team Captain's Email</FormLabel>
            <FormInput
              type="number"
              required
              placeholder="Phone Number"
              onChange={(e) => setCaptainNumber(e.target.value)}
            />
            <FormLabel htmlFor="for">Name of Team Member 1</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Name 1"
              onChange={(e) => setMember1(e.target.value)}
            />
            <FormLabel htmlFor="for">Name of Team Member 2</FormLabel>
            <FormInput
              type="text"
              required
              placeholder="Name 2"
              onChange={(e) => setMember2(e.target.value)}
            />

            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Register;
