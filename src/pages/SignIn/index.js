import React from 'react';

import { Container, Form, FormInput, SubmitButton, Logo } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Logo />

      <Form>
        <FormInput
          returnKeyType="send"
          placeholder="Informe seu id de cadastro"
        />

        <SubmitButton>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
