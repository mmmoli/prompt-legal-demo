import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`
  border-t
  border-gray-400
  pt-6
`;

const Heading = tw.h2`
  text-xl
  block
  mb-6
`;

export type FieldsetProps = {
  heading: React.ReactNode;
};

export const Fieldset: React.FC<FieldsetProps> = ({ children, heading }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      {children}
    </Container>
  );
};

export default Fieldset;
