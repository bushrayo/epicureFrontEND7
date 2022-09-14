import React, { useState } from "react";
import { line } from "../../../services/imagesURL";
import {
  Body,
  Header,
  CloseButton,
  Address,
  Input,
  Line,
  AddressDiv,
  AddressParagraph,
  Form,
  Button,
  ForgetDiv,
  ForgetButton,
  LineImage,
  OrLineDiv,
  SignUpButton,
} from "./Style";

interface Props {
  setShowSignInModal: (params: any) => any;
}

export default function SignInModal({ setShowSignInModal }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const hideSignInPage = () => {
    setShowSignInModal(false);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowSignInModal(false);
  };

  const ForgetPasswordFunchtion = () => {
    alert("forget password");
  };
  const SignUPFunction = () => {
    alert("go to Sign UP");
  };

  return (
    <Body>
      <Header>
        <CloseButton onClick={hideSignInPage}> X </CloseButton>
        <Line />
      </Header>

      <AddressDiv>
        <Address>Sign in</Address>
        <AddressParagraph>
          {" "}
          To continue the order, please sign in
        </AddressParagraph>
      </AddressDiv>

      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email adress" name="email" required />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <Button type="submit">LOGIN</Button>
      </Form>

      <ForgetDiv>
        <ForgetButton onClick={ForgetPasswordFunchtion}>
          {" "}
          Forget password?{" "}
        </ForgetButton>

        <OrLineDiv>
          <LineImage src={line} />
          or
          <LineImage src={line} />
        </OrLineDiv>

        <SignUpButton type="button" onClick={SignUPFunction}>
          SIGN UP
        </SignUpButton>
      </ForgetDiv>
    </Body>
  );
}
