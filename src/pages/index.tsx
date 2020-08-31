import React from 'react';
import tw from 'twin.macro';
import { NewCompanyRegistrationForm } from '../components/forms/NewCompanyRegistrationForm';

const Container = tw.div`
  p-12
`;

const IndexPage: React.FC = () => (
  <Container>
    <NewCompanyRegistrationForm submitHandler={window.alert} />
  </Container>
);

export default IndexPage;
