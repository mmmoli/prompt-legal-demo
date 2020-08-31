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

const Heading = tw.h2`
  block
  text-lg
`;

const Container = tw.div`
  my-4
  grid
  grid-cols-1
  gap-2
`;

type AddressFormProps = {
  index: number;
  onCancel: () => void;
};
export const AddressForm: React.FC<AddressFormProps> = ({ index, onCancel }) => {
  return (
    <Container>
      <Heading>Premises #{index + 1}</Heading>
      <Button type="button" buttonVariant="text" onClick={() => onCancel()}>
        <FiTrash2 />
      </Button>
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
