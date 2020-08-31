import React from 'react';
import tw from 'twin.macro';
import { NewCompanyRegistrationForm } from '../components/forms/NewCompanyRegistrationForm';

const Container = tw.div`
  p-12
`;

const handler = (values: any) => {
  if (window !== undefined) {
    window.alert(JSON.stringify(values, undefined, 2))
    return;
  }
  console.log(values)
}

const IndexPage: React.FC = () => (
  <Container>
    <NewCompanyRegistrationForm submitHandler={handler} />
  </Container>
);

export default IndexPage;
