import React from 'react';
import { Field } from 'formik';
import tw from 'twin.macro';
import { FiTrash2 } from 'react-icons/fi';
import { Button } from '../../Button';
import { Label, StyledInput } from '../../elements';

export enum StreetType {
  SOI = 'Soi',
  ALLEY = 'Alley'
}

export type Address = {
  houseRegistrationNo: string;
  no: string;
  building: string;
  SuiteNo: string;
  Floor: string;
  streetType: StreetType;
  street: string;
  subDistrict: string;
  district: string;
  province: string;
};

const Header = tw.div`
  flex
  items-center
  justify-between
  bg-red-400
`;

const Heading = tw.h3`
  block
  text-lg
`;

const Container = tw.div`
  gap-2
  grid
  grid-cols-1
  max-w-xs
  my-4
`;

type AddressFormProps = {
  index: number;
  onCancel: () => void;
};
export const AddressForm: React.FC<AddressFormProps> = ({ index, onCancel }) => {
  return (
    <Container>
      <Header>
        <Heading>Premises #{index + 1}</Heading>
        <Button type="button" buttonVariant="text" onClick={() => onCancel()}>
          <FiTrash2 /> Delete
        </Button>
      </Header>
      <Label>
        House Registration No.
        <Field as={StyledInput} name={`premises.${index}.address.houseRegistrationNo`} />
      </Label>
      <Label>
        Building No.
        <Field as={StyledInput} name={`premises.${index}.address.building`} />
      </Label>
    </Container>
  );
};
